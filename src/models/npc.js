class npc {
    #id
    #name
    #rarity
    #description
    #killExperience

    constructor(npcData) {
        this.#id = npcData.id
        this.#name = npcData.name
        this.#rarity = npcData.rarity
        this.#description = npcData.description
        this.#killExperience = npcData.killExperience
    }
}

module.exports = consumable
