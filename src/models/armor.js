class armor extends item {
    defense

    constructor(armorData) {
        super(armorData)
        this.defense = armorData.defense
    }
}

module.exports = armor
