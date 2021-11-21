const database = require('../databases/pg.js')

class player {
    uid
    name
    stage
    items
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
            'INSERT INTO public.players (uid, username, items, start_date, stats, energy, xp, currency, premium_currency)' +
            'VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)'
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
        ]
        let db = new database()
        db.runQuery(query, params)
    }
    async checkIfNew() {
        let query = 'SELECT * FROM public.players WHERE uid = $1'
        let params = [this.uid]
        var db = new database()
        var results = await db.fetch(query, params)

        if (results.rows.length < 1) {
            return true
        } else {
            return false
        }
    }
}

module.exports = player
