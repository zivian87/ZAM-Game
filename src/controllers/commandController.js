const command = require('../models/command.js');
class commandController {
    #model
    #userMessage
    constructor() {
    }
    assignMessage(message) {
        this.#userMessage = message;
    }
    determineType() {
        if (this.#userMessage.includes("test")) {
            return "test";
        }
    }
    getMessage() {
        var type = this.determineType();
        var model = new command(this.#userMessage, type);
        return model.getReponse();
    }
}

module.exports = commandController