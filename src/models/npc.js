class NPC {
<<<<<<< HEAD
    id;
    name;
    stats;
    rarity;
    description;
    killExperience;
    stage;
    isBoss;

    constructor(npcData) {
        this.id = npcData.id;
        this.name = npcData.name;
        this.rarity = npcData.rarity;
        this.description = npcData.description;
        this.killExperience = npcData.killExperience;
        this.stats = npcData.stats;
        this.stage = npcData.stage;
        this.isBoss = npcData.isBoss;
=======
    id
    name
    stats
    rarity
    description
    killExperience
    stage

    constructor(npcData) {
        this.id = npcData.id
        this.name = npcData.name
        this.rarity = npcData.rarity
        this.description = npcData.description
        this.killExperience = npcData.killExperience
        this.stats = npcData.stats
        this.stage = npcData.stage
>>>>>>> 01d7137d6a240f6df0944ecaeb96d50287a54b1b
    }
}

module.exports = NPC
