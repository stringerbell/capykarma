import React, { useState } from 'react';
import { CREATURES, CREATURE_FACTS } from '../constants/creatures';

export default function CreatureCard({ creature, currentCreature, lifetime, health, karma, intelligence }) {
    const [showFact, setShowFact] = useState(false);
    const currentFact = CREATURE_FACTS[currentCreature];

    return (
        <div className="life-card">
            <div className="creature-info">
                <div
                    className="creature-emoji"
                    onMouseEnter={() => setShowFact(true)}
                    onMouseLeave={() => setShowFact(false)}
                    style={{ cursor: 'help' }}
                >
                    {creature.emoji}
                </div>
                <h2 className="creature-name">{creature.name}</h2>
                <p className="lifetime">Lifetime #{lifetime}</p>

                {showFact && currentFact && (
                    <div className="creature-fact-tooltip">
                        {currentFact}
                    </div>
                )}
            </div>

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
                                width: `${Math.min(Math.abs(karma), 100)}%`,
                                marginLeft: karma < 0 ? `${Math.max(0, 50 - Math.abs(karma/2))}%` : '50%'
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
    );
}