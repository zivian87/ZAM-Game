class item {
    _id
    _name
    _rarity
    _sellPrice
    _buyPrice
    _description
    _canCraft
    _qty
    _type

    constructor(itemData) {
        this._name = itemData.name
        this._description = itemData.description
    }
}

module.exports = item
