export function garbleText(text, intelligence) {
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

export function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}