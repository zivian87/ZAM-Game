const consumable = require('./consumable')

class consumableCache {
    #consumable
    constructor() {
        this.#consumable = new Map()
        this.generateCache()
    }

    generateCache() {
        // TODO: create dictionary
        this.#consumable.set(
            30001,
            this.createConsumable(
                30001,
                'Healing Potion',
                'common',
                5,
                10,
                'A potion that will heal you. Duh.',
                true,
                1,
                'Consumable',
                'restorative',
                20,
                1
            )
        )
    }

    createConsumable(
        inId,
        inName,
        inRarity,
        inSellPrice,
        inBuyPrice,
        inDescription,
        inCanCraft,
        inQty,
        inType,
        inConsumableType,
        inConsumableEffect,
        inStage
    ) {
        consumableData = {
            id: inId,
            name: inName,
            rarity: inRarity,
            sellPrice: inSellPrice,
            buyPrice: inBuyPrice,
            description: inDescription,
            canCraft: inCanCraft,
            qty: inQty,
            type: inType,
            consumableType: inConsumableType,
            consumableEffect: inConsumableEffect,
            stage: inStage,
        }
        return new consumable(consumableData)
    }

    getConsumable(id) {
        return this.#consumables.get(id)
    }

    getConsumables(consumableIDs) {
        var consumables = new Array(consumableIDs.length)
        consumableIDs.forEach((ID) => consumables.push(this.getconsumable(ID)))
    }

    getConsumablesByStage(stageID){
        var valuesArray = new Array([...this.#consumable].values());
        return valuesArray.filter(value => value.stageID == stageID);
    }
}

module.exports = consumableCache
