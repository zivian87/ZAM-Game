class rawMaterial extends item {
    #resourceType

    constructor(rawMaterialData) {
        super(rawMaterialData);
        this.#resourceType = rawMaterialData.resourceType;
    }
}

module.exports = rawMaterial
