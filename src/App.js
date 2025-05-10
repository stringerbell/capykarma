import React, { useState, useEffect, useRef } from 'react';
import './App.css';

// Storage keys for persistence
const STORAGE_KEYS = {
  KARMA: 'karmic_journey_karma',
  KARMA_BACKUP: 'karmic_journey_karma_backup',
  KARMA_CHECKSUM: 'karmic_journey_karma_checksum',
  LIFETIME: 'karmic_journey_lifetime',
  LIFETIME_BACKUP: 'karmic_journey_lifetime_backup',
  HISTORY: 'karmic_journey_history',
  HISTORY_BACKUP: 'karmic_journey_history_backup'
};

// Simple checksum function
function calculateChecksum(value) {
  return btoa(String(value * 7 + 42)).substring(0, 8);
}

// Get persistent value with healing and tampering detection
function getPersistentValue(key, backupKey, checksumKey, defaultValue, onTamperDetected = null) {
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
    if (key === STORAGE_KEYS.KARMA && checksum && primaryValue !== null) {
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
      if (key === STORAGE_KEYS.KARMA) {
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
function setPersistentValue(key, backupKey, value, checksumKey = null) {
  try {
    const stringValue = JSON.stringify(value);

    // Save to all storage locations
    localStorage.setItem(key, stringValue);
    localStorage.setItem(backupKey, stringValue);
    sessionStorage.setItem(key, stringValue);

    // Save checksum for karma
    if (checksumKey && key === STORAGE_KEYS.KARMA) {
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

// Define creatures and their karma ranges
const CREATURES = {
  celestial: { minKarma: 80, name: "Celestial Being", emoji: "👼", healthDecay: 0.15 },
  human: { minKarma: 60, name: "Human", emoji: "🧑", healthDecay: 0.25 },
  capybara: { minKarma: 40, name: "Capybara", emoji: "🦫", healthDecay: 0.35 },
  dog: { minKarma: 20, name: "Dog", emoji: "🐕", healthDecay: 0.45 },
  rat: { minKarma: 0, name: "Rat", emoji: "🐀", healthDecay: 0.6 },
  cockroach: { minKarma: -20, name: "Cockroach", emoji: "🪳", healthDecay: 0.8 },
  bacteria: { minKarma: -40, name: "Bacteria", emoji: "🦠", healthDecay: 1.0 }
};

// Question types with karma impacts
const QUESTIONS = [
  {
    text: "You find a wallet on the ground. What do you do?",
    options: [
      { text: "Return it to its owner", karma: 10, intelligence: 5 },
      { text: "Keep the money, return the wallet", karma: -5, intelligence: 0 },
      { text: "Keep everything", karma: -15, intelligence: -5 }
    ]
  },
  {
    text: "A smaller creature needs help crossing a river. You...",
    options: [
      { text: "Help them cross safely", karma: 15, intelligence: 5 },
      { text: "Ignore them", karma: -5, intelligence: 0 },
      { text: "Push them in for fun", karma: -20, intelligence: -10 }
    ]
  },
  {
    text: "You find food but others are hungry too. You...",
    options: [
      { text: "Share with everyone", karma: 20, intelligence: 10 },
      { text: "Take what you need", karma: 0, intelligence: 5 },
      { text: "Take it all", karma: -10, intelligence: -5 }
    ]
  }
];

// Garble text based on intelligence
function garbleText(text, intelligence) {
  if (intelligence >= 50) return text;

  const garbleChance = (50 - intelligence) / 100;
  let result = '';

  for (let char of text) {
    if (char === ' ' || Math.random() > garbleChance) {
      result += char;
    } else {
      // Replace with random character
      const randomChar = Math.random() < 0.5 ?
          String.fromCharCode(97 + Math.floor(Math.random() * 26)) :
          String.fromCharCode(Math.floor(Math.random() * 10) + 48);
      result += randomChar;
    }
  }

  return result;
}

// Shuffle array using Fisher-Yates algorithm
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function App() {
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

  // Console warning message
  useEffect(() => {
    console.log(
        '%c⚠️ KARMIC SECURITY SYSTEM ACTIVE ⚠️',
        'color: #ff0000; font-size: 24px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);'
    );
    console.log(
        '%cThinking of cheating? The universe is watching...',
        'color: #ffaa00; font-size: 16px; font-weight: bold;'
    );
    console.log(
        '%cHere\'s exactly what NOT to do:',
        'color: #ffffff; font-size: 14px; font-style: italic;'
    );
    console.log(
        '%c❌ localStorage.setItem("karmic_journey_karma", "9999")',
        'color: #ff6666; font-size: 12px; font-family: monospace; background: #1a1a1a; padding: 4px;'
    );
    console.log(
        '%c❌ localStorage.setItem("karmic_journey_karma_backup", "9999")',
        'color: #ff6666; font-size: 12px; font-family: monospace; background: #1a1a1a; padding: 4px;'
    );
    console.log(
        '%c❌ sessionStorage.setItem("karmic_journey_karma", "9999")',
        'color: #ff6666; font-size: 12px; font-family: monospace; background: #1a1a1a; padding: 4px;'
    );
    console.log(
        '%c❌ Editing values in the Application tab',
        'color: #ff6666; font-size: 12px; font-family: monospace; background: #1a1a1a; padding: 4px;'
    );
    console.log(
        '%c\n⚡ WARNING: Attempting to manipulate karma will result in SEVERE penalties! ⚡',
        'color: #ffff00; font-size: 16px; font-weight: bold; background: #660000; padding: 8px; border: 2px solid #ffff00;'
    );
    console.log(
        '%c\nThe universe has a perfect memory. Every tampering attempt makes your karma worse.\nTrue redemption comes only through genuine choices.',
        'color: #aaaaaa; font-size: 12px; font-style: italic;'
    );
    console.log(
        '%c\n🧘 Play honestly. Build real karma. 🧘',
        'color: #00ff00; font-size: 14px; font-weight: bold;'
    );
  }, []);

  // Load persistent values
  const [gameState, setGameState] = useState('playing');
  const [currentCreature, setCurrentCreature] = useState('capybara');
  const [health, setHealth] = useState(100);
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
  const [intelligence, setIntelligence] = useState(50);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [lifetime, setLifetime] = useState(() =>
      getPersistentValue(STORAGE_KEYS.LIFETIME, STORAGE_KEYS.LIFETIME_BACKUP, null, 1)
  );
  const [history, setHistory] = useState(() =>
      getPersistentValue(STORAGE_KEYS.HISTORY, STORAGE_KEYS.HISTORY_BACKUP, null, [])
  );
  const [isLoadingQuestion, setIsLoadingQuestion] = useState(false);

  const healthRef = useRef(health);
  healthRef.current = health;

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

  // Hidden healing mechanism - runs periodically to ensure consistency
  useEffect(() => {
    const healingInterval = setInterval(() => {
      // Heal karma from any available source
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

      // Heal lifetime
      const healedLifetime = getPersistentValue(STORAGE_KEYS.LIFETIME, STORAGE_KEYS.LIFETIME_BACKUP, null, lifetime);
      if (healedLifetime !== lifetime) {
        setLifetime(healedLifetime);
      }

      // Heal history
      const healedHistory = getPersistentValue(STORAGE_KEYS.HISTORY, STORAGE_KEYS.HISTORY_BACKUP, null, history);
      if (JSON.stringify(healedHistory) !== JSON.stringify(history)) {
        setHistory(healedHistory);
      }
    }, 2000); // Check every 2 seconds

    return () => clearInterval(healingInterval);
  }, [karma, lifetime, history]);

  // Health decay effect
  useEffect(() => {
    const creature = CREATURES[currentCreature] || CREATURES.capybara;
    const interval = setInterval(() => {
      if (healthRef.current > 0 && gameState === 'playing') {
        setHealth(prev => Math.max(0, prev - creature.healthDecay));
      }
    }, 100);

    return () => clearInterval(interval);
  }, [currentCreature, gameState]);

  // Check for death and reincarnation
  useEffect(() => {
    if (health <= 0 && gameState === 'playing') {
      reincarnate();
    }
  }, [health, gameState]);

  // Generate random question periodically
  useEffect(() => {
    if (gameState !== 'playing') return;

    let timeout;

    if (isLoadingQuestion) {
      // If loading, show next question after delay
      timeout = setTimeout(() => {
        const question = QUESTIONS[Math.floor(Math.random() * QUESTIONS.length)];
        const shuffledQuestion = {
          ...question,
          options: shuffleArray(question.options)
        };
        setCurrentQuestion(shuffledQuestion);
        setIsLoadingQuestion(false);
      }, 2000);
    } else if (!currentQuestion && !isLoadingQuestion) {
      // If no question and not loading, start loading after delay
      timeout = setTimeout(() => {
        setIsLoadingQuestion(true);
      }, 3000);
    }

    return () => clearTimeout(timeout);
  }, [currentQuestion, gameState, isLoadingQuestion]);

  function reincarnate() {
    setGameState('reincarnating');

    // Add to history
    setHistory(prev => [...prev, {
      lifetime,
      creature: currentCreature,
      finalKarma: karma,
      finalIntelligence: intelligence
    }]);

    // Determine next creature based on karma
    let nextCreature = 'bacteria';
    for (const [key, creature] of Object.entries(CREATURES)) {
      if (karma >= creature.minKarma) {
        nextCreature = key;
        break;
      }
    }

    setTimeout(() => {
      setCurrentCreature(nextCreature);
      setHealth(100);
      setLifetime(prev => prev + 1);
      setGameState('playing');
      setCurrentQuestion(null);
      setIsLoadingQuestion(false);

      // Karma carries over with some decay
      setKarma(prev => prev * 0.8);
      // Intelligence slightly resets but retains some
      setIntelligence(prev => 30 + prev * 0.3);
    }, 2000);
  }

  function handleChoice(option) {
    setKarma(prev => {
      // Calculate karma change based on current karma level
      let karmaChange = option.karma;

      // Entropy factor: negative actions have 50% more impact
      if (option.karma < 0) {
        karmaChange = option.karma * 1.5;
      }

      // Amplification based on absolute karma (works for both positive and negative)
      const absKarma = Math.abs(prev);
      const scaleFactor = 1 + (absKarma / 50) + Math.pow(absKarma / 100, 2);

      // Apply scaling
      karmaChange = karmaChange * scaleFactor;

      return prev + karmaChange;
    });

    setIntelligence(prev => Math.max(0, Math.min(100, prev + option.intelligence)));
    setCurrentQuestion(null);

    // Show loading immediately after choice
    setTimeout(() => {
      setIsLoadingQuestion(true);
    }, 100);
  }

  const creature = CREATURES[currentCreature] || CREATURES.capybara;

  return (
      <div className="App">
        <div className="game-container">
          <h1 className="game-title">The Karmic Journey</h1>

          {/* Current Life */}
          <div className="life-card">
            <div className="creature-info">
              <div className="creature-emoji">{creature.emoji}</div>
              <h2 className="creature-name">{creature.name}</h2>
              <p className="lifetime">Lifetime #{lifetime}</p>
            </div>

            {/* Stats */}
            <div className="stats">
              {/* Health */}
              <div className="stat">
                <div className="stat-header">
                  <span className="stat-label">Health</span>
                  <span className="stat-value">{Math.round(health)}%</span>
                </div>
                <div className="stat-bar">
                  <div
                      className="stat-fill health-fill"
                      style={{ width: `${health}%` }}
                  />
                </div>
              </div>

              {/* Karma */}
              <div className="stat">
                <div className="stat-header">
                  <span className="stat-label">Karma</span>
                  <span className="stat-value">{Math.round(karma)}</span>
                </div>
                <div className="stat-bar">
                  <div
                      className={`stat-fill karma-fill ${karma >= 0 ? 'positive' : 'negative'}`}
                      style={{
                        width: `${Math.abs(karma)}%`,
                        marginLeft: karma < 0 ? `${50 - Math.abs(karma/2)}%` : '50%'
                      }}
                  />
                </div>
              </div>

              {/* Intelligence */}
              <div className="stat">
                <div className="stat-header">
                  <span className="stat-label">Intelligence</span>
                  <span className="stat-value">{Math.round(intelligence)}%</span>
                </div>
                <div className="stat-bar">
                  <div
                      className="stat-fill intelligence-fill"
                      style={{ width: `${intelligence}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Tampering Warning */}
          {tamperDetected && (
              <div className="tampering-warning">
                <h3>⚠️ The Universe Has Noticed Your Deception ⚠️</h3>
                <p>Your karma has been reduced as punishment for attempting to manipulate fate.</p>
              </div>
          )}

          {/* Loading Indicator */}
          {isLoadingQuestion && gameState === 'playing' && (
              <div className="loading-card">
                <div className="loading-spinner"></div>
                <p>Contemplating next situation...</p>
              </div>
          )}

          {/* Question/Event */}
          {currentQuestion && gameState === 'playing' && !isLoadingQuestion && (
              <div className="question-card">
                <h3 className="question-text">
                  {garbleText(currentQuestion.text, intelligence)}
                </h3>
                <div className="options">
                  {currentQuestion.options.map((option, index) => (
                      <button
                          key={index}
                          onClick={() => handleChoice(option)}
                          className="option-button"
                      >
                        {garbleText(option.text, intelligence)}
                      </button>
                  ))}
                </div>
              </div>
          )}

          {/* Reincarnation Screen */}
          {gameState === 'reincarnating' && (
              <div className="reincarnation-card">
                <h3>You have died...</h3>
                <p>Your karma was: {Math.round(karma)}</p>
                <p>Reincarnating...</p>
                <div className="reincarnation-animation">✨</div>
              </div>
          )}

          {/* History */}
          {history.length > 0 && (
              <div className="history-card">
                <h3>Past Lives</h3>
                <div className="history-list">
                  {history.map((life, index) => (
                      <div key={index} className="history-item">
                        <div className="history-creature">
                          <span>{CREATURES[life.creature]?.emoji}</span>
                          <span>Life #{life.lifetime}</span>
                        </div>
                        <div className="history-stats">
                          Karma: {Math.round(life.finalKarma)} | Int: {Math.round(life.finalIntelligence)}
                        </div>
                      </div>
                  ))}
                </div>
              </div>
          )}
        </div>
      </div>
  );
}

export default App;