const database = require('../databases/pg.js')

class player {
    uid
    name
    current_stage
    max_stage
    inventory
    equipped_items
    stats
    energy
    startDate
    level
    experience
    currency
    premiumCurrency

    constructor(discordID, discordName) {
        this.uid = discordID
        this.name = discordName
    }

    insert() {
        let query =
            'INSERT INTO public.players (uid, username, items, start_date, stats, energy, xp, currency, premium_currency, current_stage, max_stage)' +
            'VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)'
        let params = [
            this.uid,
            this.name,
            null,
            new Date(),
            null,
            100,
            0,
            200,
            0,
            "1.1",
            "1.1"
        ]
        let db = new database();
        db.runQuery(query, params);
    }
    async checkIfNew() {
        let query = 'SELECT * FROM public.players WHERE uid = $1';
        let params = [this.uid];
        var db = new database();
        var results = getPlayerRecord();

        if (results.rows.length < 1) {
            return true;
        } else {
            return false;
        }
    }
    async buildFromDB(){
        var dbResults = getPlayerRecord();
        this.current_stage = dbResults.current_stage;
        this.max_stage = dbResults.max_stage;
        this.currency = dbResults.currency;
        this.premiumCurrency = dbResults.premium_currency;
        this.max_stage = dbResults.max_stage;
        this.energy = dbResults.energy;
        this.level = dbResults.current_level;
        this.experience = dbResults.xp;
    }
    async getPlayerRecord(){
        let query = 'SELECT * FROM public.players WHERE uid = $1';
        let params = [this.uid];
        var db = new database();
        return await db.fetch(query, params);
    }
}

module.exports = player
