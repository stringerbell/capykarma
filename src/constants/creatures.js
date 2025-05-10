export const CREATURES = {
    // Highest karma tier
    deity: {
        minKarma: 200,
        name: "Cosmic Deity",
        emoji: "🌟",
        healthDecay: 0.01
    },
    buddha: {
        minKarma: 150,
        name: "Enlightened Buddha",
        emoji: "☸️",
        healthDecay: 0.03
    },
    seraph: {
        minKarma: 120,
        name: "Six-Winged Seraph",
        emoji: "👁️",
        healthDecay: 0.05
    },
    dragon: {
        minKarma: 100,
        name: "Benevolent Dragon",
        emoji: "🐉",
        healthDecay: 0.08
    },
    celestial: {
        minKarma: 80,
        name: "Celestial Being",
        emoji: "👼",
        healthDecay: 0.15
    },

    // High karma tier
    phoenix: {
        minKarma: 70,
        name: "Phoenix",
        emoji: "🔥",
        healthDecay: 0.2
    },
    unicorn: {
        minKarma: 65,
        name: "Unicorn",
        emoji: "🦄",
        healthDecay: 0.22
    },
    human: {
        minKarma: 60,
        name: "Human",
        emoji: "🧑",
        healthDecay: 0.25
    },

    // Mid-high karma tier
    dolphin: {
        minKarma: 55,
        name: "Dolphin",
        emoji: "🐬",
        healthDecay: 0.28
    },
    octopus: {
        minKarma: 50,
        name: "Octopus",
        emoji: "🐙",
        healthDecay: 0.3
    },
    elephant: {
        minKarma: 45,
        name: "Elephant",
        emoji: "🐘",
        healthDecay: 0.32
    },
    capybara: {
        minKarma: 40,
        name: "Capybara",
        emoji: "🦫",
        healthDecay: 0.35
    },

    // Mid karma tier
    panda: {
        minKarma: 35,
        name: "Panda",
        emoji: "🐼",
        healthDecay: 0.38
    },
    koala: {
        minKarma: 30,
        name: "Koala",
        emoji: "🐨",
        healthDecay: 0.4
    },
    cat: {
        minKarma: 25,
        name: "Cat",
        emoji: "🐈",
        healthDecay: 0.42
    },
    dog: {
        minKarma: 20,
        name: "Dog",
        emoji: "🐕",
        healthDecay: 0.45
    },

    // Low karma tier
    rabbit: {
        minKarma: 15,
        name: "Rabbit",
        emoji: "🐰",
        healthDecay: 0.48
    },
    hamster: {
        minKarma: 10,
        name: "Hamster",
        emoji: "🐹",
        healthDecay: 0.5
    },
    pigeon: {
        minKarma: 5,
        name: "Pigeon",
        emoji: "🕊️",
        healthDecay: 0.55
    },
    rat: {
        minKarma: 0,
        name: "Rat",
        emoji: "🐀",
        healthDecay: 0.6
    },

    // Negative karma tier
    snake: {
        minKarma: -5,
        name: "Snake",
        emoji: "🐍",
        healthDecay: 0.65
    },
    vulture: {
        minKarma: -10,
        name: "Vulture",
        emoji: "🦅",
        healthDecay: 0.7
    },
    spider: {
        minKarma: -15,
        name: "Spider",
        emoji: "🕷️",
        healthDecay: 0.75
    },
    cockroach: {
        minKarma: -20,
        name: "Cockroach",
        emoji: "🪳",
        healthDecay: 0.8
    },

    // Deep negative karma tier
    worm: {
        minKarma: -30,
        name: "Worm",
        emoji: "🪱",
        healthDecay: 0.85
    },
    slug: {
        minKarma: -35,
        name: "Slug",
        emoji: "🐌",
        healthDecay: 0.88
    },
    bacteria: {
        minKarma: -40,
        name: "Bacteria",
        emoji: "🦠",
        healthDecay: 1.0
    },
    virus: {
        minKarma: -50,
        name: "Virus",
        emoji: "🦠",
        healthDecay: 1.2
    },

    // Extremely negative karma tier
    parasite: {
        minKarma: -60,
        name: "Parasite",
        emoji: "🪲",
        healthDecay: 1.4
    },
    fungus: {
        minKarma: -70,
        name: "Fungus",
        emoji: "🍄",
        healthDecay: 1.6
    },
    prion: {
        minKarma: -80,
        name: "Prion",
        emoji: "⚡",
        healthDecay: 1.8
    },
    void: {
        minKarma: -100,
        name: "Void Entity",
        emoji: "⚫",
        healthDecay: 2.0
    },

    // Special creatures for extreme karma
    nightmare: {
        minKarma: -150,
        name: "Living Nightmare",
        emoji: "👹",
        healthDecay: 2.5
    },
    glitch: {
        minKarma: -200,
        name: "Reality Glitch",
        emoji: "📶",
        healthDecay: 3.0
    },
    error: {
        minKarma: -300,
        name: "ERROR_404",
        emoji: "❌",
        healthDecay: 4.0
    },

    // Ultra-high karma special creatures
    universe: {
        minKarma: 500,
        name: "Universe Itself",
        emoji: "🌌",
        healthDecay: 0.001
    },
    concept: {
        minKarma: 1000,
        name: "Pure Concept",
        emoji: "💭",
        healthDecay: 0.0001
    }
};

// Fun fact comments for each creature (could be displayed on reincarnation)
export const CREATURE_FACTS = {
    deity: "You transcend physical form. Time is merely a suggestion.",
    buddha: "You have achieved enlightenment. Suffering is optional.",
    seraph: "You have six wings and way too many eyes. It's complicated.",
    dragon: "You hoard wisdom instead of gold. Very progressive.",
    celestial: "You glow in the dark. Great at parties, terrible at hide-and-seek.",
    phoenix: "You're literally too hot to handle. Also, immortal-ish.",
    unicorn: "Your horn has WiFi. Don't ask how.",
    human: "Opposable thumbs! The universe's greatest achievement.",
    dolphin: "You're smarter than humans but too polite to mention it.",
    octopus: "Eight arms, three hearts, zero student loans.",
    elephant: "You never forget. Blessing and curse, really.",
    capybara: "Maximum chill achieved. Everyone's best friend.",
    panda: "Professional bamboo critic. Terrible at dating.",
    koala: "High on eucalyptus 24/7. Living the dream.",
    cat: "You knock things off tables for science.",
    dog: "All humans are good boys/girls to you.",
    rabbit: "Hippity hoppity, karma is now your property.",
    hamster: "Running in wheels, going nowhere. Metaphor alert.",
    pigeon: "Government surveillance drone. Or just a bird. Who knows?",
    rat: "Not all heroes wear capes. Some have tails.",
    snake: "No legs, no problem. Yoga instructor's hate this one trick.",
    vulture: "Nature's cleanup crew. Someone has to do it.",
    spider: "Web developer. Eight legs up on the competition.",
    cockroach: "Will survive nuclear war. Won't survive a shoe.",
    worm: "No eyes, no problems. Dirt sommelier.",
    slug: "Leave a trail everywhere. Basically a living GPS.",
    bacteria: "You're invisible and everywhere. Ultimate hide-and-seek champion.",
    virus: "Not even alive. Still causing drama.",
    parasite: "Living rent-free. Literally.",
    fungus: "You're a fun guy. Get it? Fun-gi? ...Sorry.",
    prion: "You're just a misfolded protein. Having an identity crisis.",
    void: "You're nothing. Achieve ultimate minimalism.",
    nightmare: "You're everyone's sleep paralysis demon.",
    glitch: "You're the universe's typo. Cosmic autocorrect incoming.",
    error: "404: Soul not found. Please try again.",
    universe: "You're everything. No pressure.",
    concept: "You're just an idea. Plato would be proud."
};