class rawMaterial extends item {
    #resourceType

    constructor(rawMaterialData) {
        super(rawMaterialData);
        this.#resourceType = rawMaterialData.resourceType;
    }

    constructor(inQty, inMaterialID, inMaterialName) {
        super(inQty, inMaterialID, inMaterialName);
    }
}

module.exports = rawMaterial
