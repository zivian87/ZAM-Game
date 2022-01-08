const weapon = require('./weapon')

class weaponCache {
    #weapons
    constructor() {
        this.#weapons = new Map()
        this.generateCache()
    }

    generateCache() {
        // TODO: create dictionary
        this.#weapons.set(
            10001,
            this.createWeapon(
                1,
                'sword',
                'rare',
                100,
                200,
                'A simple sword.',
                true,
                1,
                'Weapon',
                15
            )
        )
    }

    createWeapon(
        inId,
        inName,
        inRarity,
        inSellPrice,
        inBuyPrice,
        inDescription,
        inCanCraft,
        inQty,
        inType,
        inAttack,
        inStage
    ) {
        weaponData = {
            id: inId,
            name: inName,
            rarity: inRarity,
            sellPrice: inSellPrice,
            buyPrice: inBuyPrice,
            description: inDescription,
            canCraft: inCanCraft,
            qty: inQty,
            type: inType,
            attack: inAttack,
            stage: inStage,
        }
        return new weapon(weaponData)
    }
    getWeapon(id) {
        return this.#weapons.get(id)
    }
    getWeapons(weaponIDs) {
        var weapons = new Array(weaponIDs.length)
        weaponIDs.forEach((ID) => weapons.push(this.getWeapon(ID)))
    }
}

module.exports = weaponCache
