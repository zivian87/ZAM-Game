const command = require("../models/command.js");
class commandController {
  #model;
  #userMessage;
  #playerID;
  #playerName;
  #commands;
  constructor(playerID, playerName) {
    this.#playerID = playerID;
    this.#playerName = playerName;
    this.setCommandMap();
  }
  assignMessage(message) {
    this.#userMessage = message;
  }
  determineType() {
    var message = this.#userMessage.substring(1);
    if (this.#commands.has(message)) {
      return message;
    } else {
      return "invalid";
    }
  }
  getMessage() {
    var type = this.determineType();

    if (type == "invalid") {
      return "invalid";
    } else {
      this.#model = new command(
        this.#userMessage,
        type,
        this.#playerID,
        this.#playerName
      );
      return this.#model.getReponse();
    }
  }
  setCommandMap() {
    this.#commands = new Map();
    this.#commands.set("begin", "Begins your adventure.");
  }
}

module.exports = commandController;
