require("dotenv").config(); //initialize dotenv
const commandController = require("../controllers/commandController.js");
const playerController = require("../controllers/playerController.js");
const Discord = require("discord.js"); //import discord.js
const { MessageEmbed } = require("discord.js");

const client = new Discord.Client({
  intents: [
    "GUILDS",
    "GUILD_MESSAGES",
    "GUILD_MESSAGE_REACTIONS",
    "GUILD_EMOJIS_AND_STICKERS",
    "DIRECT_MESSAGES",
  ],
});
const { builtinModules } = require("module");

class discordView {
  #controller;
  #UID;
  #Name;
  constructor() {}
  loginMessage() {
    client.on("ready", () => {
      console.log(`Logged in as ${client.user.tag}!`);
    });
  }
  async listenForInput() {
    client.on("messageCreate", async (msg) => {
      if (msg.content.startsWith("!")) {
        this.setPlayerDiscordInfo(msg.author.id, msg.author.username);
        this.createController();
        var response = this.retrieveMessage(msg.content);
        this.respond(response);
      }
    });
  }
  createController() {
    this.#controller = new commandController(this.#UID, this.#Name);
  }
  retrieveMessage(message) {
    this.#controller.assignMessage(message);
    var retrievedMessage = this.#controller.getMessage();
    if (retrievedMessage == "invalid") {
      return "Invalid command. Type !help for a list of valid commands";
    } else {
      return retrievedMessage;
    }
  }
  embedMessage(title, message) {
    var embeddedMessage = new MessageEmbed()
      .setColor("#0099ff")
      .setTitle(title)
      .setDescription(message);
    return embeddedMessage;
  }
  async respond(response) {
    const channel = await client.channels.fetch("909089980788404254");
    var message = "Something bad happened";
    if (response) {
      message = await response;
    }
    var embeddedMessage = this.embedMessage(this.#Name, message);

    await channel.send({ embeds: [embeddedMessage] });
  }
  setPlayerDiscordInfo(discordID, discordName) {
    this.#UID = discordID;
    this.#Name = discordName;
  }
}

//make sure this line is the last line

module.exports = discordView;

client.login(process.env.CLIENT_TOKEN); //login bot using token
