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
    constructor(){
        this.UID = "";
        this.Name = "";
    }
    Insert()
    {
        let query = 'INSERT INTO public.players (UID, UserName) VALUES ($1,$2)';
        let params = [this.UID, this.Name];
        var db = new database();
        db.RunQuery(query, params);
    }
}

module.exports = player