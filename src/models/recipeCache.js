const rawMaterial = require('./rawMaterial')
const recipe = require('./recipe')

class recipeCache {
    #recipes
    constructor() {
        this.#recipes = new Map()
        this.generateCache()
    }

    generateCache() {
        // TODO: create dictionary
        this.#recipes.set(
            1,
            this.createRawMaterial(
                1,
                'Wood Sword Recipe',
                'common',
                5,
                10,
                'A recipe with instructions on how to craft a wooden sword.',
                false,
                1,
                'Weapon Recipe',
                'Recipe',
                1,
                'Wood Sword',
                'Weapon',
                1,
                [new rawMaterial(5, 1, "Wood"), new rawMaterial(1, 2, "Twine")]
            )
        )
    }

    createRecipe(
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
        inStage,
        inCraftableItemName,
        inCraftableItemType,
        inCraftableItemID,
        inRequiredMaterials
    ) {
        recipeData = {
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
            craftableItemName: inCraftableItemName,
            craftableItemID: inCraftableItemID,
            inCraftableItemType: inCraftableItemType,
            requiredMaterials: inRequiredMaterials
        }
        return new recipe(recipeData)
    }

    getRecipe(id) {
        return this.#rawMaterials.get(id)
    }

    getRecipes(recipeIDs) {
        var recipes = new Array(recipeIDs.length)
        recipeIDs.forEach((ID) => recipes.push(this.getRecipe(ID)))
    }

    getRecipesByStage(stageID){
        var valuesArray = new Array([...this.#recipes].values());
        return valuesArray.filter(value => value.stageID == stageID);
    }
}

module.exports = recipeCache

