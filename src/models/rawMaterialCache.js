const rawMaterial = require('./rawMaterial')

class rawMaterialsCache {
    #rawMaterial
    constructor() {
        this.#rawMaterial = new Map()
        this.generateCache()
    }

    generateCache() {
        // TODO: create dictionary
        this.#rawMaterial.set(
            52,
            this.createRawMaterial(
                52,
                'Iron Ore',
                'common',
                5,
                10,
                'Hard metal you can smelt to make stuff with.',
                false,
                1,
                'Raw Material',
                'ore'
            )
        )
    }

    createRawMaterial(
        inId,
        inName,
        inRarity,
        inSellPrice,
        inBuyPrice,
        inDescription,
        inCanCraft,
        inQty,
        inType,
        inResourceType,
        inStage
    ) {
        rawMaterialData = {
            id: inId,
            name: inName,
            rarity: inRarity,
            sellPrice: inSellPrice,
            buyPrice: inBuyPrice,
            description: inDescription,
            canCraft: inCanCraft,
            qty: inQty,
            type: inType,
            resourceType: inResourceType,
            stage: inStage,
        }
        return new rawMaterial(rawMaterialData)
    }
    getWawMaterial(id) {
        return this.#rawMaterials.get(id)
    }
    getWawMaterials(rawMaterialIDs) {
        var rawMaterials = new Array(rawMaterialIDs.length)
        rawMaterialIDs.forEach((ID) =>
            rawMaterials.push(this.getrawMaterial(ID))
        )
    }
}

module.exports = rawMaterialsCache
