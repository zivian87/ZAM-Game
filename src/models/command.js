const test = require('./test.js');
const database = require('../databases/pg.js')

class command{
    #userCommand
    #commandType
    #playerID
    constructor(userCommand, type, playerID)
    {
        this.#userCommand = userCommand;
        this.#commandType = type;
        this.#playerID = playerID
    }
    async getReponse(){
        let db = new database();
        if(this.#commandType == "test")
        {
            let testCommand = new test();
            let message = testCommand.getMessage(1);
            return message;
        }
        else if (this.#commandType == "gold")
        {
            console.log("Player UID = " + this.#playerID);
            var params = [this.#playerID];
            var query = 'SELECT * FROM public.players WHERE uid = $1';
            var results = await db.fetch(query, params);
            console.log("HERE ARE THE RESULTS: " + results);
            let message = "Currency: " + results.rows[0].currency + "g";
            return message;
        }
    }    
}
module.exports = command