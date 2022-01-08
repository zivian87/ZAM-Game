class recipe extends item {
    #requiredItems = []

    constructor(recipeData) {
        super()
        this.#requiredItems = recipeData.requiredItems
    }
}

module.exports = rawMaterial
