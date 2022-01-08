class weapon extends item {
    attack

    constructor(weaponData) {
        super(weaponData)
        this.attack = weaponData.attack
    }
}

module.exports = weapon
