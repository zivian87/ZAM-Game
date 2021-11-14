const player = require('../models/player.js')

class playerController{
    #model;
    constructor(){
        this.#model = new player();
    }
    SaveNewPlayer(playerData){
        this.#model.UID = playerData.UID;
        this.#model.Name = playerData.Name;
        this.#model.Insert();
    }
}

module.exports = playerController
