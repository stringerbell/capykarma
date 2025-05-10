import React from 'react';
import './App.css';
import { useGameState } from './hooks/useGameState';
import { useAntiCheat } from './hooks/useAntiCheat';
import CreatureCard from './components/CreatureCard';
import QuestionCard from './components/QuestionCard';
import ReincarnationScreen from './components/ReincarnationScreen';
import HistoryList from './components/HistoryList';
import LoadingIndicator from './components/LoadingIndicator';
import TamperingWarning from './components/TamperingWarning';

function App() {
  const {
    gameState,
    currentCreature,
    health,
    karma,
    intelligence,
    currentQuestion,
    lifetime,
    history,
    isLoadingQuestion,
    handleChoice,
    creature,
    tamperDetected
  } = useGameState();

  useAntiCheat(karma);

  return (
      <div className="App">
        <div className="game-container">
          <h1 className="game-title">The Karmic Journey</h1>

          <CreatureCard
              creature={creature}
              currentCreature={currentCreature}
              lifetime={lifetime}
              health={health}
              karma={karma}
              intelligence={intelligence}
          />

          {tamperDetected && <TamperingWarning />}

          {isLoadingQuestion && gameState === 'playing' && (
              <LoadingIndicator />
          )}

          {currentQuestion && gameState === 'playing' && !isLoadingQuestion && (
              <QuestionCard
                  question={currentQuestion}
                  karma={karma}
                  intelligence={intelligence}
                  onChoice={handleChoice}
              />
          )}

          {gameState === 'reincarnating' && (
              <ReincarnationScreen karma={karma} />
          )}

          {history.length > 0 && <HistoryList history={history} />}
        </div>
      </div>
  );
}

export default App;