class recipe extends item {
<<<<<<< HEAD
    craftableItemName;
    craftableItemType;
    craftableItemID;
    requiredMaterials;

    constructor(recipeData) {
        super(recipeData);
        this.craftableItemName = recipeData.craftableItemName;
        this.craftableItemType = recipeData.craftableItemType;
        this.craftableItemID = recipeData.craftableItemID;
        this.requiredMaterials = recipeData.requiredMaterials;
    }
}

module.exports = recipe
=======
    #requiredItems = []

    constructor(recipeData) {
        super()
        this.#requiredItems = recipeData.requiredItems
    }
}

module.exports = rawMaterial
>>>>>>> 01d7137d6a240f6df0944ecaeb96d50287a54b1b
