export const silksongData = {
  gameInfo: {
    title: "Hollow Knight: Silksong",
    description: "Hollow Knight: Silksong is the epic sequel to Hollow Knight, featuring Hornet as the protagonist in a whole new kingdom.",
    releaseStatus: "Released",
    developer: "Team Cherry",
    platforms: ["PC", "Nintendo Switch", "PlayStation", "Xbox"]
  },
  
  characters: [
    {
      id: 1,
      name: "Hornet",
      title: "Protector of Hallownest",
      description: "Hornet, princess of Hallownest, is a skilled warrior who wields a needle and thread. She is the daughter of the Pale King and Herrah the Beast.",
      abilities: [
        "Silk Spear - Her primary weapon",
        "Thread & Silk - For traversal and combat",
        "Acrobatic movements"
      ],
      image: "👑",
      role: "Playable Character"
    },
    {
      id: 2,
      name: "Shakra",
      title: "The Weaver",
      description: "A mysterious weaver who assists Hornet in her journey through Pharloom.",
      abilities: [
        "Weaving silk",
        "Crafting tools",
        "Knowledge of the kingdom"
      ],
      image: "🕷️",
      role: "NPC"
    },
    {
      id: 3,
      name: "The Bard",
      title: "Musician of Pharloom",
      description: "A wandering musician who provides clues and lore about the kingdom.",
      abilities: [
        "Playing melodies",
        "Revealing secrets",
        "Guiding travelers"
      ],
      image: "🎵",
      role: "NPC"
    }
  ],
  
  bosses: [
    {
      id: 1,
      name: "The Moss Prophet",
      title: "Guardian of the Moss Grotto",
      description: "A mystical being who commands the moss and fungi of the grottos. She uses nature-based attacks and illusions.",
      location: "Moss Grotto",
      difficulty: "Medium",
      attacks: [
        "Spore Burst",
        "Vine Whip",
        "Fungal Illusions",
        "Nature's Wrath"
      ],
      image: "🍄",
      rewards: ["Moss Charm", "Silk Spool"]
    },
    {
      id: 2,
      name: "The Clockwork Knight",
      title: "Mechanical Guardian",
      description: "An ancient automaton that guards the clockwork towers of Pharloom. It uses precise, mechanical attacks.",
      location: "Clockwork Tower",
      difficulty: "Hard",
      attacks: [
        "Gear Slash",
        "Spring Launch",
        "Clockwork Barrage",
        "Time Stop"
      ],
      image: "⚙️",
      rewards: ["Clockwork Key", "Precision Needle"]
    },
    {
      id: 3,
      name: "The Coral Guardian",
      title: "Protector of the Coral Depths",
      description: "A massive creature made of living coral that defends the underwater depths of Pharloom.",
      location: "Coral Depths",
      difficulty: "Very Hard",
      attacks: [
        "Coral Spike",
        "Tidal Wave",
        "Pearl Barrage",
        "Abyssal Pull"
      ],
      image: "🐚",
      rewards: ["Coral Shard", "Deep Sea Silk"]
    }
  ]
};