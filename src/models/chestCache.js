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
            10,
            this.createChest(
                10,
                'Material Chest',
                'common',
                500,
                1000,
                'A common chest that contains a variety of Raw Materials.',
                false,
                1,
                'Chest',
                'Raw Material'
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
        inChestType
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
        }
        return new chest(chestData)
    }
}
