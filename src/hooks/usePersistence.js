import { useState, useEffect } from 'react';
import { STORAGE_KEYS } from '../constants/storageKeys';
import { getPersistentValue, setPersistentValue } from '../utils/persistence';

export function usePersistence() {
    const [tamperDetected, setTamperDetected] = useState(false);

    const [karma, setKarma] = useState(() =>
        getPersistentValue(
            STORAGE_KEYS.KARMA,
            STORAGE_KEYS.KARMA_BACKUP,
            STORAGE_KEYS.KARMA_CHECKSUM,
            50,
            () => setTamperDetected(true)
        )
    );

    const [lifetime, setLifetime] = useState(() =>
        getPersistentValue(STORAGE_KEYS.LIFETIME, STORAGE_KEYS.LIFETIME_BACKUP, null, 1)
    );

    const [history, setHistory] = useState(() =>
        getPersistentValue(STORAGE_KEYS.HISTORY, STORAGE_KEYS.HISTORY_BACKUP, null, [])
    );

    // Initialize IndexedDB
    useEffect(() => {
        if ('indexedDB' in window) {
            const request = indexedDB.open('KarmicJourneyDB', 1);
            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                if (!db.objectStoreNames.contains('gameState')) {
                    db.createObjectStore('gameState', { keyPath: 'id' });
                }
            };
        }
    }, []);

    // Persist karma changes
    useEffect(() => {
        setPersistentValue(STORAGE_KEYS.KARMA, STORAGE_KEYS.KARMA_BACKUP, karma, STORAGE_KEYS.KARMA_CHECKSUM);
    }, [karma]);

    // Persist lifetime changes
    useEffect(() => {
        setPersistentValue(STORAGE_KEYS.LIFETIME, STORAGE_KEYS.LIFETIME_BACKUP, lifetime);
    }, [lifetime]);

    // Persist history changes
    useEffect(() => {
        setPersistentValue(STORAGE_KEYS.HISTORY, STORAGE_KEYS.HISTORY_BACKUP, history);
    }, [history]);

    // Hidden healing mechanism
    useEffect(() => {
        const healingInterval = setInterval(() => {
            const healedKarma = getPersistentValue(
                STORAGE_KEYS.KARMA,
                STORAGE_KEYS.KARMA_BACKUP,
                STORAGE_KEYS.KARMA_CHECKSUM,
                karma,
                () => {
                    setTamperDetected(true);
                    // Apply additional penalty that always makes karma worse
                    setKarma(prev => {
                        if (prev >= 0) {
                            // Positive karma: push negative
                            return prev - 100;
                        } else {
                            // Negative karma: make more negative
                            return prev * 1.2 - 50;
                        }
                    });
                }
            );
            if (healedKarma !== karma) {
                setKarma(healedKarma);
            }

            const healedLifetime = getPersistentValue(STORAGE_KEYS.LIFETIME, STORAGE_KEYS.LIFETIME_BACKUP, null, lifetime);
            if (healedLifetime !== lifetime) {
                setLifetime(healedLifetime);
            }

            const healedHistory = getPersistentValue(STORAGE_KEYS.HISTORY, STORAGE_KEYS.HISTORY_BACKUP, null, history);
            if (JSON.stringify(healedHistory) !== JSON.stringify(history)) {
                setHistory(healedHistory);
            }
        }, 2000);

        return () => clearInterval(healingInterval);
    }, [karma, lifetime, history]);

    return {
        karma,
        setKarma,
        lifetime,
        setLifetime,
        history,
        setHistory,
        tamperDetected
    };
}