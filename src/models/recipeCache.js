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
            74,
            this.createConsumable(
                74,
                'Healing Potion',
                'common',
                5,
                10,
                'A potion that will heal you. Duh.',
                true,
                1,
                'Consumable',
                'restorative',
                20
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
        inConsumableEffect
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
        }
        return new consumable(consumableData)
    }
}
