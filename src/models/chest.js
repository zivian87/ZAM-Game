class chest extends item {
    #chestType

    constructor(chestData) {
        super(chestData)
        this.#chestType = chestData.chestType
    }
}

module.exports = chest
