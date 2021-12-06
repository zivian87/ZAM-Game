 class stats{
    ATK;
    DEF;
    HP;
    level;
    hitRate;
    criticalChance;
    constructor(statsString){
        var statsArray = this.getStatsFromString(statsString);
        this.ATK = statsArray[0];
        this.DEF = statsArray[1];
        this.HP = statsArray[2];
        this.Level = statsArray[3];
        this.hitRate = statsArray[4];
        this.criticalChance = statsArray[5];        
    }
    getStatsFromString(statsString)
    {
        return statsString.split(',');
    }
}