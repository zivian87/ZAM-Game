const weapon = require('./weapon')

class weaponCache {
    #weapon
    constructor() {
        this.#weapon = new Map()
        this.generateCache()
    }

    generateCache() {
        // TODO: create dictionary
        this.#weapon.set(
            1,
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
        inAttack
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
        }
        return new weapon(weaponData)
    }
}
