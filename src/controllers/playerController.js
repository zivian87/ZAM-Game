const player = require('../models/player.js')

class playerController {
    #model
    UID
    playerName
    constructor(discordID, discordName) {
        this.UID = discordID
        this.playerName = discordName
        this.#model = new player(this.UID, this.playerName)
    }
    saveNewPlayer() {
        this.#model.insert()
    }
    async newPlayer() {
        var newPlayer = await this.#model.checkIfNew()
        if (newPlayer) {
            console.log('New Player')
            return true
        } else {
            console.log('Not a new Player')
            return false
        }
    }
}

module.exports = playerController
