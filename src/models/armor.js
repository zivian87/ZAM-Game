class armor extends item {
    #type
    #defense // May want to add a min and a max defense
    #rarity
    #cost
    #sellPrice
    #description

    constructor(armorData) {
        this.#name = armorData.name
        this.#type = armorData.type
        this.#defense = armorData.defense
        this.#rarity = armorData.rarity
        this.#cost = armorData.cost
        this.#sellPrice = armorData.sellPrice
        this.#description = armorData.descripition
    }

    createArmor() {}
}

module.exports = armor
