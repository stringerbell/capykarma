import React, { useState, useEffect, useRef } from 'react';
import './App.css';

// Define creatures and their karma ranges
const CREATURES = {
  celestial: { minKarma: 80, name: "Celestial Being", emoji: "👼", healthDecay: 0.05 },
  human: { minKarma: 60, name: "Human", emoji: "🧑", healthDecay: 0.1 },
  capybara: { minKarma: 40, name: "Capybara", emoji: "🦫", healthDecay: 0.15 },
  dog: { minKarma: 20, name: "Dog", emoji: "🐕", healthDecay: 0.2 },
  rat: { minKarma: 0, name: "Rat", emoji: "🐀", healthDecay: 0.25 },
  cockroach: { minKarma: -20, name: "Cockroach", emoji: "🪳", healthDecay: 0.3 },
  bacteria: { minKarma: -40, name: "Bacteria", emoji: "🦠", healthDecay: 0.4 }
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
  const [gameState, setGameState] = useState('playing');
  const [currentCreature, setCurrentCreature] = useState('capybara');
  const [health, setHealth] = useState(100);
  const [karma, setKarma] = useState(50);
  const [intelligence, setIntelligence] = useState(50);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [lifetime, setLifetime] = useState(1);
  const [history, setHistory] = useState([]);
  const [isLoadingQuestion, setIsLoadingQuestion] = useState(false);

  const healthRef = useRef(health);
  healthRef.current = health;

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
    if (gameState !== 'playing' || currentQuestion || isLoadingQuestion) return;

    const timeout = setTimeout(() => {
      if (!currentQuestion && gameState === 'playing') {
        setIsLoadingQuestion(true);
        // Add a delay before showing the next question
        setTimeout(() => {
          const question = QUESTIONS[Math.floor(Math.random() * QUESTIONS.length)];
          // Create a new question object with shuffled options
          const shuffledQuestion = {
            ...question,
            options: shuffleArray(question.options)
          };
          setCurrentQuestion(shuffledQuestion);
          setIsLoadingQuestion(false);
        }, 1000); // 1 second delay for loading
      }
    }, 3000 + Math.random() * 2000);

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
    setKarma(prev => Math.max(-100, Math.min(100, prev + option.karma)));
    setIntelligence(prev => Math.max(0, Math.min(100, prev + option.intelligence)));
    setCurrentQuestion(null);
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