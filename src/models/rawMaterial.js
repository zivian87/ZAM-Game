class rawMaterial extends item {
    #resourceType

    constructor(rawMaterialData) {
        super()
        this.#resourceType = rawMaterialData.resourceType
    }
}

module.exports = rawMaterial
