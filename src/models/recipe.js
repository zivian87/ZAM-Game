class recipe extends item {
    craftableItemName
    craftableItemType
    craftableItemID
    requiredMaterials

    constructor(recipeData) {
        super(recipeData)
        this.craftableItemName = recipeData.craftableItemName
        this.craftableItemType = recipeData.craftableItemType
        this.craftableItemID = recipeData.craftableItemID
        this.requiredMaterials = recipeData.requiredMaterials
    }
}

module.exports = recipe
