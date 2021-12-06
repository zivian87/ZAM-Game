const weaponsCache = require('../models/weaponCache.js');

class stageCache{
    #stageMap;
    constructor(id)
    {

    }
    generateCache() {
        // TODO: create dictionary
        this.#npc.set(
            109,
            createNpc(
                109,
                'Mr. Monster',
                'Common',
                'Mr. Monster is big and scary',
                100
            )
        )
    }

    generateStageData(inTheme, inBoss, inWeaponDrops, inArmorDrops, inConsumableDrops, inAverageLevel, inNPCs, inDifficultyTier, inIntroMessage, inOutroMessage) {
        return {
            theme = inTheme,
            boss = inBoss,
            weaponDrops = inWeaponDrops,
            armorDrops = inArmorDrops,
            consumableDrops = inConsumableDrops,
            recipeDrops = inAverageLevel,
            npcs = inNPCs,
            difficultyTier = inDifficultyTier,
            introMessage = inIntroMessage,
            outroMessage = inOutroMessage
        }
    }
    getWeapons(weaponIDs){
        var weapons = new Array(weaponIDs.length);
        var allWeapons = new weaponsCache();
        Array.forEach(ID =>
            weapons.push(allWeapons.getWeapon(ID))
        )
    }
}