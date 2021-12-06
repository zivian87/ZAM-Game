class stage{
    #theme;
    #id;
    #boss;
    #weaponDrops;
    #armorDrops;
    #consumableDrops;
    #recipeDrops;
    #averageLevel;
    #npcs
    #difficultyTier;
    #introMessage;
    #outroMessage;
    constructor(id){
        this.#id = id;
    }
    buildStage(stageData){
        this.#theme = stageData.theme;
        this.#boss = stageData.boss;
        this.#weaponDrops = stageData.weaponDrops;
        this.#armorDrops = stageData.armorDrops;
        this.#consumableDrops = stageData.consumableDrops;
        this.#recipeDrops = stageData.averageLevel;
        this.#npcs = stageData.npcs;
        this.#difficultyTier = stageData.difficultyTier;
        this.#introMessage = stageData.introMessage;
        this.#outroMessage = stageData.outroMessage;
    }
    retrieveStageFromCache(){

    }
}

module.exports = stage;