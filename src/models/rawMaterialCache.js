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
        this.#rawMaterial.set(
            1,
            this.createRawMaterial(
                1,
                'Wood',
                'Common',
                1,
                2,
                'Wood from a tree.',
                false,
                1,
                'Raw Material',
                'Wood'
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

    getrawMaterial(id) {
        return this.#rawMaterials.get(id)
    }

    getrawMaterials(rawMaterialIDs) {
        var rawMaterials = new Array(rawMaterialIDs.length)
        rawMaterialIDs.forEach((ID) =>
            rawMaterials.push(this.getrawMaterial(ID))
        )
    }

    getrawMaterialsByStage(stageID) {
        var valuesArray = new Array([...this.#rawMaterial].values())
        return valuesArray.filter((value) => value.stageID == stageID)
    }
}

module.exports = rawMaterialsCache
