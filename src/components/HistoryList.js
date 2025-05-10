import React from 'react';
import { CREATURES } from '../constants/creatures';

export default function HistoryList({ history }) {
    if (history.length === 0) return null;

    return (
        <div className="history-card">
            <h3>Past Lives</h3>
            <div className="history-list">
                {history.slice().reverse().map((life, index) => {
                    const creature = CREATURES[life.creature];
                    const isGoodKarma = life.finalKarma >= 0;

                    return (
                        <div key={`${life.lifetime}-${index}`} className="history-item">
                            <div className="history-creature">
                                <span className="history-emoji">{creature?.emoji}</span>
                                <div className="history-details">
                                    <span className="history-name">{creature?.name || 'Unknown'}</span>
                                    <span className="history-lifetime">Life #{life.lifetime}</span>
                                </div>
                            </div>
                            <div className="history-stats">
                <span className={`karma-stat ${isGoodKarma ? 'positive' : 'negative'}`}>
                  Karma: {Math.round(life.finalKarma)}
                </span>
                                <span className="int-stat">
                  Int: {Math.round(life.finalIntelligence)}
                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="history-footer">
                <p>Showing {history.length} past lives</p>
            </div>
        </div>
    );
}