const weapon = require('./weapon')

class weaponCache {
    #weapon
    constructor() {
        this.#weapon = new Map()
        this.generateCache()
    }

    generateCache() {
        // TODO: create dictionary
        // this.#weapon.set(
        //   "dagger",
        //   createWeapon("dagger", "stab", 5, 200, "common", 25)
        // );
    }

    createWeapon(inName, inType, inAtk, inCost, inRarity, inSellPrice) {
        weaponData = {
            name: inName,
            type: inType,
            atk: inAtk,
            cost: inCost,
            rarity: inRarity,
            sellPrice: inSellPrice,
        }
        return new weapon(weaponData)
    }
}
