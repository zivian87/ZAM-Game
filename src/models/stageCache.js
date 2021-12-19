const weaponCache = require('./weaponCache.js'),
const armorCache = require('./armorCache.js'),
const consumableCache = require('./consumableCache.js'),
const rawMaterialsCache = require('./rawMaterialCache.js'),
const chestCache = require('./chestCache.js'),

class stageCache{
    #stageMap;
    constructor()
    {
        this.generateCache();
    }
    generateCache() {
        // TODO: create dictionary
        this.#stageMap.set(
            1,
            createRawMaterial(
                "Village",
                1,
                "Corrupt Rat",
                this.getWeaponDrops(),
                this.getArmorDrops(),
                this.getConsumableDrops(),
                this.getRawMaterialDrops(),
                this.getChestDrops(),
                this.getRecipeDrops(),
                1,
                this.getNPCS(),
                1,
                "Intro Message",
                "Outro Message"
            )
        )
    }

    createRawMaterial(
        inTheme,
        inID,
        inBoss,
        inWeaponDrops,
        inArmorDrops,
        inConsumableDrops,
        inRawMaterialDrops,
        inChestDrops,
        inRecipeDrops,
        inAverageLevel,
        inNPCS,
        inDifficultyTier,
        inIntroMessage,
        inOutroMessage,
    ) {
        rawMaterialData = {
            theme = inTheme,
            id = inID,
            boss = inBoss,
            weaponDrops = inWeaponDrops,
            armorDrops = inArmorDrops,
            rawMaterialDrops = inRawMaterialDrops,
            chestDrops = inChestDrops,
            consumableDrops = inConsumableDrops,
            recipeDrops = inRecipeDrops,
            averageLevel = inAverageLevel,
            npcs = inNPCS,
            difficultyTier = inDifficultyTier,
            introMessage = inIntroMessage,
            outroMessage = inOutroMessage
        }
        return new rawMaterial(rawMaterialData)
    }
    getWeaponDrops(){

    }
    getArmorDrops(){

    }
    getConsumableDrops(){

    }
    getRecipeDrops(){

    }
    getRawMaterialDrops(){

    }
    getChestDrops(){

    }
    getNPCS(){

    }
}