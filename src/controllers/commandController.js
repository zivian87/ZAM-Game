const command = require('../models/command.js');
class commandController {
    #model
    #userMessage
    #playerID
    constructor(playerID) {
        this.#playerID = playerID;
    }
    assignMessage(message) {
        this.#userMessage = message;
    }
    determineType() {
        if (this.#userMessage.includes("gold")) {
            return "gold";
        }
    }
    getMessage() {
        var type = this.determineType();
        var model = new command(this.#userMessage, type, this.#playerID);
        return model.getReponse();
    }
}

module.exports = commandController