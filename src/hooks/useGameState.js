import { useState, useEffect, useRef } from 'react';
import { CREATURES } from '../constants/creatures';
import { QUESTIONS } from '../constants/questions';
import { calculateKarmaChange, getNextCreature } from '../utils/karmaCalculations';
import { shuffleArray } from '../utils/textEffects';
import { usePersistence } from './usePersistence';

export function useGameState() {
    const {
        karma,
        setKarma,
        lifetime,
        setLifetime,
        history,
        setHistory,
        tamperDetected
    } = usePersistence();

    // Initialize current creature based on karma
    const [currentCreature, setCurrentCreature] = useState(() =>
        getNextCreature(karma, CREATURES)
    );

    const [gameState, setGameState] = useState('playing');
    const [health, setHealth] = useState(100);
    const [intelligence, setIntelligence] = useState(50);
    const [currentQuestion, setCurrentQuestion] = useState(null);
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
        if (gameState !== 'playing') return;

        let timeout;

        if (isLoadingQuestion) {
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
            timeout = setTimeout(() => {
                setIsLoadingQuestion(true);
            }, 3000);
        }

        return () => clearTimeout(timeout);
    }, [currentQuestion, gameState, isLoadingQuestion]);

    function reincarnate() {
        setGameState('reincarnating');

        setHistory(prev => [...prev, {
            lifetime,
            creature: currentCreature,
            finalKarma: karma,
            finalIntelligence: intelligence
        }]);

        const nextCreature = getNextCreature(karma, CREATURES);

        // Increased delay for reincarnation screen
        setTimeout(() => {
            setCurrentCreature(nextCreature);
            setHealth(100);
            setLifetime(prev => prev + 1);
            setGameState('playing');
            setCurrentQuestion(null);
            setIsLoadingQuestion(false);

            setKarma(prev => prev * 0.8);
            setIntelligence(prev => 30 + prev * 0.3);
        }, 5000); // Increased from 2000ms to 5000ms
    }

    function handleChoice(option) {
        setKarma(prev => calculateKarmaChange(prev, option.karma));
        setIntelligence(prev => Math.max(0, Math.min(100, prev + option.intelligence)));
        setCurrentQuestion(null);

        setTimeout(() => {
            setIsLoadingQuestion(true);
        }, 100);
    }

    const creature = CREATURES[currentCreature] || CREATURES.capybara;

    return {
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
    };
}