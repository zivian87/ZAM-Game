<<<<<<< HEAD
const combatController = require('./combatController');
const stageCache = require('../models/stageCache');

class stageController{
    #player;
    currentStage;
    constructor(player){
        this.#player = player;
        this.currentStage = getCurrentStage();
    }

    getCurrentStage(){
        return stageCache.getCurrentStage(this.#player.currentStage)
    }
    
    battle(){
        
    }
}
=======
class stageController {
    #player
    constructor(player) {
        this.#player = player
    }
}
>>>>>>> 01d7137d6a240f6df0944ecaeb96d50287a54b1b
