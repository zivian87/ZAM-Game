const utils = require('../Utilities/math.js')

class combatController {
    #player
    #npc
    combatLog
    constructor(player, npc) {
        this.#player = player
        this.#npc = npc
        combatLog = new Array()
    }

    fight() {
        while (this.#player.HP > 0 || this.#npc.HP > 0) {
            this.playerTurn()
            this.npcTurn()
        }
    }

    playerTurn() {
        this.attack(this.#player, this.#npc)
    }

    npcTurn() {
        this.attack(this.#npc, this.#player)
    }

    attack(attacker, defender) {
        var startingHP = defender.stats.HP
        if (this.attackLanded(attacker.stats.hitChance)) {
            if (this.criticalStrike(attacker.stats.critChance)) {
                defender.stats.HP = damage(
                    defender.stats.HP,
                    defender.stats.ATK * 1.5,
                    defender.stats.DEF
                )
                var damageDone = startingHP - defender.stats.HP
                let combatString =
                    attacker.name +
                    ' landed a critical strike and did ' +
                    damageDone +
                    'to ' +
                    defender.name +
                    '. ' +
                    defender.name +
                    ' now has ' +
                    defender.stats.HP +
                    ' hit point(s).'
                this.combatLog.push(combatString)
                console.log(combatString)
            } else {
                defender.stats.HP = damage(
                    defender.stats.HP,
                    defender.stats.ATK,
                    defender.stats.DEF
                )
                var damageDone = startingHP - defender.stats.HP
                let combatString =
                    attacker.name +
                    ' did ' +
                    damageDone +
                    'to ' +
                    defender.name +
                    '. ' +
                    defender.name +
                    ' now has ' +
                    defender.stats.HP +
                    ' hit point(s).'
                this.combatLog.push(combatString)
                console.log(combatString)
            }
        }
    }

    damage(HP, ATK, DEF) {
        return HP - ATK + DEF
    }

    attackLanded(hitChance) {
        var randomNumber = utils.getRandomInt(100)
        if (randomNumber > hitChance) {
            return false
        } else {
            return true
        }
    }

    criticalStrike(critChance) {
        var randomNumber = utils.getRandomInt(100)
        if (randomNumber > critChance) {
            return false
        } else {
            return true
        }
    }

    retrieveCombatLog() {
        return this.combatLog
    }
}

module.exports = combatController
