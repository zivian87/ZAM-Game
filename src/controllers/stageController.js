const combatController = require('./combatController')
const stageCache = require('../models/stageCache')

class stageController {
    #player
    currentStage
    constructor(player) {
        this.#player = player
        this.currentStage = getCurrentStage()
    }

    getCurrentStage() {
        return stageCache.getCurrentStage(this.#player.currentStage)
    }

    battle() {}
}
