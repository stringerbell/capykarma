import React, { useState } from 'react';
import { garbleText } from '../utils/textEffects';
import { getButtonObstacles } from '../utils/obstacles';

export default function QuestionCard({ question, karma, intelligence, onChoice }) {
    const [confirmingChoice, setConfirmingChoice] = useState(null);
    const [buttonPositions, setButtonPositions] = useState({});

    const handleButtonHover = (index, option) => {
        if (karma >= 0 || option.karma <= 0) return;

        const obstacles = getButtonObstacles(karma, option.karma);
        if (obstacles.move) {
            const angle = Math.random() * Math.PI * 2;
            const distance = obstacles.moveDistance || 50;
            setButtonPositions(prev => ({
                ...prev,
                [index]: {
                    x: Math.cos(angle) * distance,
                    y: Math.sin(angle) * distance
                }
            }));
        }
    };

    const handleButtonLeave = (index) => {
        setTimeout(() => {
            setButtonPositions(prev => ({
                ...prev,
                [index]: { x: 0, y: 0 }
            }));
        }, 300);
    };

    const handleChoice = (option) => {
        const obstacles = getButtonObstacles(karma, option.karma);

        if (obstacles.confirm && confirmingChoice !== option) {
            setConfirmingChoice(option);
            return;
        }

        onChoice(option);
        setConfirmingChoice(null);
        setButtonPositions({});
    };

    return (
        <div className="question-card">
            <h3 className="question-text">
                {garbleText(question.text, intelligence)}
            </h3>
            <div className="options">
                {question.options.map((option, index) => {
                    const obstacles = getButtonObstacles(karma, option.karma);
                    const position = buttonPositions[index] || { x: 0, y: 0 };
                    const isConfirming = confirmingChoice === option;

                    // Create fake buttons for high negative karma
                    const fakeButtons = [];
                    if (obstacles.fakeButtons && option.karma > 0) {
                        for (let i = 0; i < 3; i++) {
                            fakeButtons.push(
                                <button
                                    key={`fake-${index}-${i}`}
                                    className={`option-button fake-button ${obstacles.invert ? 'inverted' : ''}`}
                                    style={{
                                        opacity: 0.7,
                                        transform: `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(${Math.random() * 30 - 15}deg)`,
                                    }}
                                    onClick={() => alert('Wrong button! The real one is moving...')}
                                >
                                    {garbleText(option.text, intelligence)}
                                </button>
                            );
                        }
                    }

                    return (
                        <div key={index} className="option-wrapper">
                            {fakeButtons}
                            <button
                                onClick={() => handleChoice(option)}
                                onMouseEnter={() => handleButtonHover(index, option)}
                                onMouseLeave={() => handleButtonLeave(index)}
                                className={`option-button ${obstacles.mirror ? 'mirrored' : ''} ${obstacles.shrink ? 'shrink' : ''} ${obstacles.invert ? 'inverted' : ''}`}
                                style={{
                                    transform: `
                    translate(${position.x}px, ${position.y}px) 
                    rotate(${obstacles.rotate ? obstacles.rotateAngle : 0}deg)
                    ${obstacles.shrink ? 'scale(0.7)' : ''}
                    ${obstacles.mirror ? 'scaleX(-1)' : ''}
                  `,
                                    transition: obstacles.move ? 'transform 0.3s ease-out' : 'transform 0.2s',
                                }}
                            >
                                {isConfirming ? (
                                    <span className="confirm-text">Are you SURE you want to be good? Click again!</span>
                                ) : (
                                    garbleText(option.text, intelligence)
                                )}
                            </button>
                        </div>
                    );
                })}
            </div>

            {karma < -20 && (
                <div className="karma-difficulty-indicator">
                    <p>Your negative karma makes righteous choices difficult...</p>
                </div>
            )}
        </div>
    );
}