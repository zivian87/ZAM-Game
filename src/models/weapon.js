class weapon extends item {
    #attack

    constructor(weaponData) {
        super()
        this.#attack = weaponData.attack
    }
}

module.exports = weapon
