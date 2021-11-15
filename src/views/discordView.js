require('dotenv').config(); //initialize dotenv
const commandController = require('../controllers/commandController.js')
const playerController = require('../controllers/playerController.js')

const Discord = require('discord.js'); //import discord.js
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS", "GUILD_EMOJIS_AND_STICKERS", "DIRECT_MESSAGES"] });
const { builtinModules } = require('module');

class discordView {
    #controller;
    #UID;
    #Name;
    constructor() {
    }
    loginMessage() {
        client.on('ready', () => {
            console.log(`Logged in as ${client.user.tag}!`);
        });
    }
    async listenForInput() {
        client.on('message', async msg => {
            if(msg.content.startsWith("!")){
                this.setPlayerDiscordInfo(msg.author.id, msg.author.username);
                let pController = new playerController(this.#UID, this.#Name);
                var newPlayer = await pController.newPlayer();
                if(newPlayer)
                {
                    console.log("SAVING NEW PLAYER");
                    pController.saveNewPlayer();
                }
                else{
                    this.createController();
                    var response = this.retrieveMessage(msg.content);
                    this.respond(response);
                }               
            }           
        });
    }
    createController(){
        this.#controller = new commandController(this.#UID);
    }
    retrieveMessage(message) {
        this.#controller.assignMessage(message);
        return this.#controller.getMessage();
    }
    async respond(response) {
        const channel = await client.channels.fetch('909089980788404254');
        var message = "Something bad happened";
        if(response)
        {
            message = await response;
        }
        console.log(message);
        await channel.send(message);
    }
    setPlayerDiscordInfo(discordID, discordName){
        this.#UID = discordID;
        this.#Name = discordName;
    }
}

//make sure this line is the last line

module.exports = discordView

client.login(process.env.CLIENT_TOKEN); //login bot using token
