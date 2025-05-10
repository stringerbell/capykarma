export function calculateKarmaChange(currentKarma, karmaChange) {
    let adjustedChange = karmaChange;

    // Entropy factor: negative actions have 50% more impact
    if (karmaChange < 0) {
        adjustedChange = karmaChange * 1.5;
    }

    // Amplification based on absolute karma
    const absKarma = Math.abs(currentKarma);
    const scaleFactor = 1 + (absKarma / 50) + Math.pow(absKarma / 100, 2);

    // Apply scaling
    adjustedChange = adjustedChange * scaleFactor;

    return currentKarma + adjustedChange;
}

export function getNextCreature(karma, creatures) {
    let nextCreature = 'error'; // Default to error state

    // Sort creatures by minKarma in descending order
    const sortedCreatures = Object.entries(creatures)
        .sort(([, a], [, b]) => b.minKarma - a.minKarma);

    // Find the first creature whose minKarma is less than or equal to current karma
    for (const [key, creature] of sortedCreatures) {
        if (karma >= creature.minKarma) {
            nextCreature = key;
            break;
        }
    }

    return nextCreature;
}