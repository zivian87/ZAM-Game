class chest extends item {
    #chestType

    constructor(chestData) {
        super()
        this.#chestType = chestData.chestType
    }
}

module.exports = chest
