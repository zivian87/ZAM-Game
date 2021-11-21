class weapon {
    #name
    #type
    #atk // May want to add a min and max atk
    #rarity
    #cost
    #sellPrice
    #description

    constructor(weaponData) {
        this.#name = weaponData.name
        this.#type = weaponData.type
        this.#atk = weaponData.atk
        this.#rarity = weaponData.rarity
        this.#cost = weaponData.cost
        this.#sellPrice = weaponData.sellPrice
        this.#description = weaponData.description
    }
}

module.exports = weapon
