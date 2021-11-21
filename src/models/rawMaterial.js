class rawMaterial {
    #name
    #type
    #rarity
    #cost
    #sellPrice
    #description

    constructor(rawMaterialData) {
        this.#name = rawMaterialData.name
        this.#type = rawMaterialData.type
        this.#rarity = rawMaterialData.rarity
        this.#cost = rawMaterialData.cost
        this.#sellPrice = rawMaterialData.sellPrice
        this.#description = rawMaterialData.description
    }
}

module.exports = rawMaterial
