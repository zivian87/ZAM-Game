require('dotenv').config(); //initialize dotenv
const commandController = require('../controllers/commandController.js')
const Discord = require('discord.js'); //import discord.js
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS", "GUILD_EMOJIS_AND_STICKERS", "DIRECT_MESSAGES"] });
const { builtinModules } = require('module');

class discordView {
    #controller;
    constructor(commandController) {
        this.#controller = commandController;
    }
    loginMessage() {
        client.on('ready', () => {
            console.log(`Logged in as ${client.user.tag}!`);
        });
    }
    listenForInput() {
        client.on('message', msg => {
            var response = this.retrieveMessage(msg.content);
            this.respond(response);
        });
    }
    retrieveMessage(message) {
        this.#controller.assignMessage(message);
        return this.#controller.getMessage();
    }
    async respond(response) {
        const channel = await client.channels.fetch('909089980788404254');
        await channel.send(response);
    }
}

//make sure this line is the last line

module.exports = discordView

client.login(process.env.CLIENT_TOKEN); //login bot using token
