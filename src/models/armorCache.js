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
            2001,
            this.createArmor(
                20001,
                'Wooden Armor',
                'common',
                500,
                1000,
                'Crappy wooden armor that will keep you alive.. for now.',
                true,
                1,
                'Armor',
                50,
                1
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
        inDefense,
        inStage
    ) {
        armorData = {
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
            stage: inStage,
        }
        return new armor(armorData)
    }

    getArmor(id) {
        return this.#armors.get(id)
    }

    getArmors(armorIDs) {
        var armors = new Array(armorIDs.length)
        armorIDs.forEach((ID) => armors.push(this.getarmor(ID)))
    }

    getArmorsByStage(stageID) {
        var valuesArray = new Array([...this.#armor].values())
        return valuesArray.filter((value) => value.stageID == stageID)
    }
}

module.exports = armorCache
