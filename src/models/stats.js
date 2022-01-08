class Stats {
    ATK
    DEF
    HP
    hitRate
    criticalChance
    constructor(statsArray) {
        this.ATK = statsArray[0]
        this.DEF = statsArray[1]
        this.HP = statsArray[2]
        this.hitRate = statsArray[3]
        this.criticalChance = statsArray[4]
    }
    getStatsArray() {
        return new Array[
            (this.ATK, this.DEF, this.HP, this.hitRate, this.criticalChance)
        ]()
    }
}

module.exports = Stats
