import React, { useState, useEffect } from 'react';
import { CREATURES, CREATURE_FACTS } from '../constants/creatures';
import { getNextCreature } from '../utils/karmaCalculations';

export default function ReincarnationScreen({ karma }) {
    const [stage, setStage] = useState(0);
    const nextCreature = getNextCreature(karma, CREATURES);
    const creatureData = CREATURES[nextCreature];
    const creatureFact = CREATURE_FACTS[nextCreature];

    useEffect(() => {
        // Progressive reveal of elements
        const timers = [
            setTimeout(() => setStage(1), 500),   // Show death message
            setTimeout(() => setStage(2), 1500),  // Show karma
            setTimeout(() => setStage(3), 2500),  // Show reincarnating
            setTimeout(() => setStage(4), 3500),  // Show next life preview
        ];

        return () => timers.forEach(clearTimeout);
    }, []);

    return (
        <div className="reincarnation-card">
            {stage >= 1 && (
                <h3 className="death-message fade-in">You have died...</h3>
            )}

            {stage >= 2 && (
                <div className="karma-reveal fade-in">
                    <p>Your karma was: <span className="karma-value">{Math.round(karma)}</span></p>
                    {karma > 100 && <p className="karma-comment">Impressive virtue!</p>}
                    {karma < -100 && <p className="karma-comment">The universe weeps...</p>}
                </div>
            )}

            {stage >= 3 && (
                <div className="reincarnating-message fade-in">
                    <p>Reincarnating...</p>
                    <div className="reincarnation-animation">✨</div>
                </div>
            )}

            {stage >= 4 && (
                <div className="next-life-preview fade-in">
                    <h4>Your next life:</h4>
                    <div className="creature-preview">
                        <span className="creature-emoji-large">{creatureData.emoji}</span>
                        <p className="creature-name-preview">{creatureData.name}</p>
                    </div>
                    {creatureFact && (
                        <p className="creature-fact">{creatureFact}</p>
                    )}
                    <div className="stats-preview">
                        <div className="stat-preview-item">
                            <span className="stat-label">Health Decay:</span>
                            <span className="stat-value decay-rate">{(creatureData.healthDecay * 100).toFixed(2)}% per second</span>
                        </div>
                        <div className="stat-preview-item">
                            <span className="stat-label">Starting Karma:</span>
                            <span className="stat-value">{Math.round(karma * 0.8)}</span>
                        </div>
                    </div>

                    {creatureData.healthDecay > 2 && (
                        <p className="extreme-warning">⚠️ EXTREME DECAY RATE - PREPARE FOR CHAOS ⚠️</p>
                    )}
                </div>
            )}
        </div>
    );
}