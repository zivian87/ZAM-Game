const weaponCache = require('./weaponCache.js'),
const armorCache = require('./armorCache.js'),
const consumableCache = require('./consumableCache.js'),
const rawMaterialsCache = require('./rawMaterialCache.js'),
const chestCache = require('./chestCache.js'),
const NPCcache = require('./NPCCache.js'),
const recipeCache = require('./recipeCache.js'),

class stageCache{
    #stageMap;

    constructor()
    {
        this.#stageMap = new Map();
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
        inThemeLevel,
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
        stageData = {
            theme = inTheme,
            themeLevel = inThemeLevel,
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
        return new stage(stageData);
    }

    getStage(id){
        return this.#stageMap.get(id);
    }

    getWeaponDrops(stageID){
        return weaponCache.getWeaponsByStage(stageID);
    }

    getArmorDrops(stageID){
        return armorCache.getArmorsByStage(stageID);
    }

    getConsumableDrops(stageID){
        return consumableCache.getConsumablesByStage(stageID);
    }

    getRecipeDrops(stageID){
        return armorCache.getRecipesByStage(stageID);
    }

    getRawMaterialDrops(stageID){
        return rawMaterialsCache.getRawMaterialsByStage(stageID);
    }

    getChestDrops(stageID){
        return chestCache.getChestsByStage(stageID);
    }

    getNPCS(stageID){
        return NPCcache.getNPCsByStage(stageID);
    }
}