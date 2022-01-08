const chest = require('./chest')

class chestCache {
    #chest
    constructor() {
        this.#chest = new Map()
        this.generateCache()
    }

    generateCache() {
        // TODO: create dictionary
        this.#chest.set(
            90001,
            this.createChest(
                9001,
                'Material Chest',
                'common',
                500,
                1000,
                'A common chest that contains a variety of Raw Materials.',
                false,
                1,
                'Chest',
                'Raw Material',
                1
            )
        )
    }

    createChest(
        inId,
        inName,
        inRarity,
        inSellPrice,
        inBuyPrice,
        inDescription,
        inCanCraft,
        inQty,
        inType,
        inChestType,
        inStage
    ) {
        chestData = {
            id: inId,
            name: inName,
            rarity: inRarity,
            sellPrice: inSellPrice,
            buyPrice: inBuyPrice,
            description: inDescription,
            canCraft: inCanCraft,
            qty: inQty,
            type: inType,
            chestType: inChestType,
            stage: inStage,
        }
        return new chest(chestData)
    }
    getChest(id) {
        return this.#consumables.get(id)
    }
    getChests(consumableIDs) {
        var consumables = new Array(consumableIDs.length)
        consumableIDs.forEach((ID) => consumables.push(this.getconsumable(ID)))
    }
}

module.exports = chestCache
