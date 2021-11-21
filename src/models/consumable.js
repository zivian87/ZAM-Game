class consumable {
    #name
    #type
    #rarity
    #cost
    #sellPrice
    #description

    constructor(consumableData) {
        this.#name = consumableData.name
        this.#type = consumableData.type
        this.#rarity = consumableData.rarity
        this.#cost = consumableData.cost
        this.#sellPrice = consumableData.sellPrice
        this.#description = consumableData.descripition
    }

    createConsumable() {}
}

module.exports = consumable
