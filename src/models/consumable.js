class consumable extends item {
    consumableType
    consumableEffect

    constructor(consumableData) {
        super(consumableData)
        this.consumableType = consumableData.consumableType
        this.consumableEffect = consumableData.consumableEffect
    }
}

module.exports = consumable
