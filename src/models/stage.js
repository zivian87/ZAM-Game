<<<<<<< HEAD
class stage{
    theme;
    themeLevel;
    progress;
    id;
    boss;
    weaponDrops;
    armorDrops;
    consumableDrops;
    chestDrops;
    rawMaterialDrops;
    recipeDrops;
    averageLevel;
    npcs;
    difficultyTier;
    introMessage;
    outroMessage;
    constructor(id){
        this.id = id;
    }

    buildStage(stageData){
        this.theme = stageData.theme;
        this.boss = stageData.boss;
        this.weaponDrops = stageData.weaponDrops;
        this.armorDrops = stageData.armorDrops;
        this.chestDrops = stageData.chestDrops;
        this.consumableDrops = stageData.consumableDrops;
        this.recipeDrops = stageData.averageLevel;
        this.averageLevel = stageData.averageLevel;
        this.npcs = stageData.npcs;
        this.difficultyTier = stageData.difficultyTier;
        this.introMessage = stageData.introMessage;
        this.outroMessage = stageData.outroMessage;
        this.rawMaterialDrops = stageData.rawMaterialDrops;
        this.difficultyTier = stageData.difficultyTier;
    }

    getStartMessage(playerName){
        return introMessage + "\n" +
        playerName + " has entered " + this.theme + ", level " + this.themeLevel + ".";
    }

    getEndMessage(playerName){
        return this.outroMessage + "\n" +
        playerName + " has completed " + this.theme + ", level " + this.themeLevel + ".";
    }

    getWeaponDrop(inRarity){
        let EligibleWeapons = this.weaponDrops.filter(weapon => weapon.rarity == inRarity);
        return EligibleWeapons[Math.floor(Math.random()*EligibleWeapons.length)];
    }

    getArmorDrop(inRarity){
        let EligibleArmors = this.armorDrops.filter(armor => armor.rarity == inRarity);
        return EligibleArmors[Math.floor(Math.random()*EligibleArmors.length)];
    }

    getRecipeDrop(inRarity){
        let EligibleRecipes = this.recipeDrops.filter(recipe => recipe.rarity == inRarity);
        return EligibleRecipes[Math.floor(Math.random()*EligibleRecipes.length)];
    }

    getConsumableDrop(inRarity){
        let EligibleConsumables = this.consumableDrops.filter(consumable => consumable.rarity == inRarity);
        return EligibleConsumables[Math.floor(Math.random()*EligibleConsumables.length)];
    }

    getChestDrop(inRarity){
        let EligibleChests = this.chestDrops.filter(chest => chest.rarity == inRarity);
        return EligibleChests[Math.floor(Math.random()*EligibleChests.length)];
    }

    getRawMaterialDrop(inRarity){
        let EligibleRawMaterials = this.rawMaterialDrops.filter(rawMaterial => rawMaterial.rarity == inRarity);
        return EligibleRawMaterials[Math.floor(Math.random()*EligibleRawMaterials.length)];
    }

    getNPC(inRarity){
        let EligibleNPCs = this.npcs.filter(npc => npc.rarity == inRarity);
        return EligibleNPCs[Math.floor(Math.random()*EligibleNPCs.length)];
    }

    getBoss(){
        return this.npcs.filter(npc => npc.isBoss == true)[0];
=======
class stage {
    theme
    id
    boss
    weaponDrops
    armorDrops
    consumableDrops
    chestDrops
    rawMaterialDrops
    recipeDrops
    averageLevel
    npcs
    difficultyTier
    introMessage
    outroMessage
    constructor(id) {
        this.id = id
    }
    buildStage(stageData) {
        this.theme = stageData.theme
        this.boss = stageData.boss
        this.weaponDrops = stageData.weaponDrops
        this.armorDrops = stageData.armorDrops
        this.consumableDrops = stageData.consumableDrops
        this.recipeDrops = stageData.averageLevel
        this.averageLevel = stageData.averageLevel
        this.npcs = stageData.npcs
        this.difficultyTier = stageData.difficultyTier
        this.introMessage = stageData.introMessage
        this.outroMessage = stageData.outroMessage
>>>>>>> 01d7137d6a240f6df0944ecaeb96d50287a54b1b
    }
    retrieveStageDataFromCache() {}
}

module.exports = stage
