<<<<<<< HEAD
const rawMaterial = require('./rawMaterial')
const recipe = require('./recipe')

class recipeCache {
    #recipes
    constructor() {
        this.#recipes = new Map()
=======
const consumable = require('./consumable')

class consumableCache {
    #consumable
    constructor() {
        this.#consumable = new Map()
>>>>>>> 01d7137d6a240f6df0944ecaeb96d50287a54b1b
        this.generateCache()
    }

    generateCache() {
        // TODO: create dictionary
<<<<<<< HEAD
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
=======
        this.#consumable.set(
            74,
            this.createConsumable(
                74,
                'Healing Potion',
                'common',
                5,
                10,
                'A potion that will heal you. Duh.',
                true,
                1,
                'Consumable',
                'restorative',
                20
>>>>>>> 01d7137d6a240f6df0944ecaeb96d50287a54b1b
            )
        )
    }

<<<<<<< HEAD
    createRecipe(
=======
    createConsumable(
>>>>>>> 01d7137d6a240f6df0944ecaeb96d50287a54b1b
        inId,
        inName,
        inRarity,
        inSellPrice,
        inBuyPrice,
        inDescription,
        inCanCraft,
        inQty,
        inType,
<<<<<<< HEAD
        inResourceType,
        inStage,
        inCraftableItemName,
        inCraftableItemType,
        inCraftableItemID,
        inRequiredMaterials
    ) {
        recipeData = {
=======
        inConsumableType,
        inConsumableEffect
    ) {
        consumableData = {
>>>>>>> 01d7137d6a240f6df0944ecaeb96d50287a54b1b
            id: inId,
            name: inName,
            rarity: inRarity,
            sellPrice: inSellPrice,
            buyPrice: inBuyPrice,
            description: inDescription,
            canCraft: inCanCraft,
            qty: inQty,
            type: inType,
<<<<<<< HEAD
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

=======
            consumableType: inConsumableType,
            consumableEffect: inConsumableEffect,
        }
        return new consumable(consumableData)
    }
}
>>>>>>> 01d7137d6a240f6df0944ecaeb96d50287a54b1b
