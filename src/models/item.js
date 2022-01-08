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
    _stage

    constructor(itemData) {
        this._name = itemData.name
        this._description = itemData.description
        this._rarity = itemData.rarity
        this._sellPrice = itemData.sellPrice
        this._buyPrice = itemData.buyPrice
        this._description = itemData.description
        this._canCraft = itemData.canCraft
        this._qty = itemData.qty
        this._type = itemData.type
        this._stage = itemData.stage
    }
}

module.exports = item
