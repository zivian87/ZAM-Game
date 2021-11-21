class armor extends item {
    #defense

    constructor(armorData) {
        super()
        this.#defense = armorData.defense
    }
}

module.exports = armor
