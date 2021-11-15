const database = require('../databases/pg.js')


class player{
    UID;
    Name;
    CurrentStage;
    Items;
    JoinDate;
    MinutesPlayed;
    CurrentLevel;
    CurrentXP;
    Currency;
    PremiumCurrency;
    constructor(discordID, discordName){
        this.UID = discordID;
        this.Name = discordName;
    }
    insert()
    {
        let query = 'INSERT INTO public.players (UID, UserName) VALUES ($1,$2)';
        let params = [this.UID, this.Name];
        let db = new database();
        db.runQuery(query, params);
    }
    async checkIfNew()
    {
        let query = 'SELECT * FROM public.players WHERE uid = $1';
        let params = [this.UID];
        var db = new database();
        var results = await db.fetch(query, params);

        if(results.rows.length < 1){
            console.log("I'M A NEW PLAYER")
            return true;
        }
        else{
            return false;
        }
    }
}

module.exports = player