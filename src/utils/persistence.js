// Simple checksum function
function calculateChecksum(value) {
    return btoa(String(value * 7 + 42)).substring(0, 8);
}

// Get persistent value with healing and tampering detection
export function getPersistentValue(key, backupKey, checksumKey, defaultValue, onTamperDetected = null) {
    try {
        // Try to get from multiple sources
        const primary = localStorage.getItem(key);
        const backup = localStorage.getItem(backupKey);
        const checksum = localStorage.getItem(checksumKey);
        const sessionValue = sessionStorage.getItem(key);

        // Parse values
        const primaryValue = primary ? JSON.parse(primary) : null;
        const backupValue = backup ? JSON.parse(backup) : null;
        const sessionValueParsed = sessionValue ? JSON.parse(sessionValue) : null;

        // Validate with checksum if it's karma
        if (key === 'karmic_journey_karma' && checksum && primaryValue !== null) {
            const calculatedChecksum = calculateChecksum(primaryValue);
            if (calculatedChecksum !== checksum) {
                // Tampering detected!
                console.warn('Karma tampering detected!');
                if (onTamperDetected) {
                    onTamperDetected();
                }

                // Use backup if available, otherwise apply penalty
                if (backupValue !== null) {
                    // Apply karma penalty that makes karma worse, not better
                    if (backupValue >= 0) {
                        // Positive karma: reduce by 50% or set to -100, whichever is worse
                        return Math.min(backupValue * 0.5, -100);
                    } else {
                        // Negative karma: make it 50% more negative
                        return backupValue * 1.5;
                    }
                } else {
                    // No backup, return heavily penalized default
                    return -200;
                }
            }
        }

        // Check for value mismatch (potential tampering)
        if (primaryValue !== null && backupValue !== null && primaryValue !== backupValue) {
            if (key === 'karmic_journey_karma') {
                // Values don't match - likely tampering
                console.warn('Karma value mismatch detected!');
                if (onTamperDetected) {
                    onTamperDetected();
                }
                // Use the lower value and apply penalty that makes it worse
                const lowerValue = Math.min(primaryValue, backupValue);
                if (lowerValue >= 0) {
                    // Positive karma: reduce significantly or go negative
                    return Math.min(lowerValue * 0.3, -50);
                } else {
                    // Negative karma: make it 30% more negative
                    return lowerValue * 1.3;
                }
            }
        }

        // Healing logic - use whichever source has data
        if (primaryValue !== null) {
            // Heal backup and session if primary exists
            localStorage.setItem(backupKey, JSON.stringify(primaryValue));
            sessionStorage.setItem(key, JSON.stringify(primaryValue));
            return primaryValue;
        } else if (backupValue !== null) {
            // Heal primary from backup
            localStorage.setItem(key, JSON.stringify(backupValue));
            sessionStorage.setItem(key, JSON.stringify(backupValue));
            return backupValue;
        } else if (sessionValueParsed !== null) {
            // Heal both from session
            localStorage.setItem(key, JSON.stringify(sessionValueParsed));
            localStorage.setItem(backupKey, JSON.stringify(sessionValueParsed));
            return sessionValueParsed;
        }

        return defaultValue;
    } catch (e) {
        console.warn('Storage access failed:', e);
        return defaultValue;
    }
}

// Save persistent value to multiple places
export function setPersistentValue(key, backupKey, value, checksumKey = null) {
    try {
        const stringValue = JSON.stringify(value);

        // Save to all storage locations
        localStorage.setItem(key, stringValue);
        localStorage.setItem(backupKey, stringValue);
        sessionStorage.setItem(key, stringValue);

        // Save checksum for karma
        if (checksumKey && key === 'karmic_journey_karma') {
            const checksum = calculateChecksum(value);
            localStorage.setItem(checksumKey, checksum);
        }

        // Also save to IndexedDB for extra persistence
        if ('indexedDB' in window) {
            const request = indexedDB.open('KarmicJourneyDB', 1);
            request.onsuccess = (event) => {
                const db = event.target.result;
                const transaction = db.transaction(['gameState'], 'readwrite');
                const store = transaction.objectStore('gameState');
                store.put({ id: key, value: value });
            };
            request.onerror = () => {
                console.warn('IndexedDB not available');
            };
        }
    } catch (e) {
        console.warn('Storage save failed:', e);
    }
}