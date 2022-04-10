class Inventory {
    weapons
    armor
    consumables
    rawMaterials
    chests
    constructor(inWeapons, inArmor, inConsumables, inRawMaterials, inChests) {
        this.weapons = inWeapons
        this.armor = inArmor
        this.consumables = inConsumables
        this.rawMaterials = inRawMaterials
        this.chests = inChests
    }
    getAllIDs() {
        var allIDs = new Array()
        allIDs.concact(this.getWeaponIDs())
        allIDs.concact(this.getArmorIDs())
        allIDs.concact(this.getConsumableIDs())
        allIDs.concact(this.getRawMaterialIDs())
        allIDs.concact(this.getChestIDs())
        return allIDs
    }
    getWeaponIDs() {
        return this.weapons.map(function (item) {
            return item._id
        })
    }
    getArmorIDs() {
        return this.armor.map(function (item) {
            return item._id
        })
    }
    getConsumableIDs() {
        return this.consumables.map(function (item) {
            return item._id
        })
    }
    getRawMaterialIDs() {
        return this.rawMaterials.map(function (item) {
            return item._id
        })
    }
    getChestIDs() {
        return this.chests.map(function (item) {
            return item._id
        })
    }
}

module.exports = Inventory
