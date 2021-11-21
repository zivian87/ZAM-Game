const armor = require('./armor')

class armorCache {
    #armor
    constructor() {
        this.#armor = new Map()
        this.generateCache()
    }

    generateCache() {
        // TODO: create dictionary
        this.#armor.set(
            25,
            this.createArmor(
                25,
                'Wooden Armor',
                'common',
                500,
                1000,
                'Crappy wooden armor that will keep you alive.. for now.',
                true,
                1,
                'Armor',
                50
            )
        )
    }

    createArmor(
        inId,
        inName,
        inRarity,
        inSellPrice,
        inBuyPrice,
        inDescription,
        inCanCraft,
        inQty,
        inType,
        inDefense
    ) {
        weaponData = {
            id: inId,
            name: inName,
            rarity: inRarity,
            sellPrice: inSellPrice,
            buyPrice: inBuyPrice,
            description: inDescription,
            canCraft: inCanCraft,
            qty: inQty,
            type: inType,
            defense: inDefense,
        }
        return new armor(armorData)
    }
}
