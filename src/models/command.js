const test = require('./test.js')
const database = require('../databases/pg.js')
const player = require('./player.js')

class command {
    #userCommand
    #commandType
    #playerID
    #playerName
    constructor(userCommand, type, playerID, playerName) {
        this.#userCommand = userCommand
        this.#commandType = type
        this.#playerID = playerID
        this.#playerName = playerName
    }
    async getReponse() {
        let db = new database()
        if (this.#commandType == 'begin') {
            return this.begin()
        } else if (this.#commandType == 'gold') {
            console.log('Player UID = ' + this.#playerID)
            var params = [this.#playerID]
            var query = 'SELECT * FROM public.players WHERE uid = $1'
            var results = await db.fetch(query, params)
            console.log('HERE ARE THE RESULTS: ' + results)
            let message = 'Currency: ' + results.rows[0].currency + 'g'
            return message
        }
    }
    async begin() {
        var currentPlayer = new player(this.#playerID, this.#playerName)
        if (await currentPlayer.checkIfNew()) {
            currentPlayer.insert()
            return (
                'You lay your head down on your pillow after a long day of working on the family farm. These days, you are the sole proprietor of the farm as over' +
                ' the recent years, members of your family have met their end through mysterious means. Some going mad, some succumbing to disease, and some just simply dissapearing.' +
                ' You pray that you do not have the same reoccuring dream that has inflicted you every night for as long as you can remember. The dream fills you with a sense of hopelessness.' +
                " Your current ventures are fruitless and will end in dissapointment and failure. You MUST start over. Start a life of adventure. You MUST do it now. You don't want to adventure." +
                " You don't want to live an exciting life. You want to live comfortably and reap the rewards of your years of hard work. Why do these dreams make the life you've built feel so empty?" +
                '\n' +
                '\n' +
                "You close your eyes with a sense of dread... that the dream will occur once again. Why wouldn't it?" +
                '\n' +
                '\n' +
                'You awake in a feverish state. The dream did occur again, but this time, it was ...different. There was an evil looming over your farm. It seemed to encompass everything within sight.' +
                ' Your village, everyone you know, plagued and diseased. Was this the reason why the dreams urged you to throw your life away and start over? Was it to fight this evil? Who knows... but' +
                " this can't go on. You decide that if you follow the path the dreams have suggested, maybe the dreams will relent." +
                ' You have no one to impress, no one to provide for.' +
                '\n' +
                '\n' +
                'You decide to start your new life of adventure first thing in the morning. A sudden sense of relief washes over you and you fall back sleep.' +
                '\n' +
                '\n' +
                'You awaken to the sound of crows cawing. You peer out the window as the light from the sun hits your eyes with a blinding fervor.' +
                ' As your vision comes into focus, you seem shocked at the total lack of wild life outside? Were you hearing things? Who cares? Adventure awaits.' +
                ' So, ' +
                this.#playerName +
                ", what's your next move? Type !help for a list of commands."
            )
        } else {
            return 'You have already started your adventure.'
        }
    }
}
module.exports = command
