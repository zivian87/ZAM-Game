class NPC {
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
    }
}

module.exports = NPC
