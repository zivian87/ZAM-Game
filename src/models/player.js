const database = require('../databases/pg.js')
const weaponCache = require('./weaponCache.js');
const armorCache = require('./armorCache.js');
const consumableCache = require('./consumableCache.js');
const rawMaterialsCache = require('./rawMaterialCache.js');
const chestCache = require('./chestCache.js');
const Inventory = require('./Inventory.js');
const { Stats } = require('fs');

class player {
    uid
    name
    currentStage
    maxStage
    inventory
    equippedWeapon
    equippedArmor
    stats
    energy
    startDate
    level
    experience
    currency
    premiumCurrency
    #playerRecord
    constructor(discordID, discordName) {
        this.uid = discordID
        this.name = discordName
    }

    insert() {
        let query =
            'INSERT INTO public.players (uid, username, items, start_date, stats, energy, xp, currency, premium_currency, current_stage, max_stage)' +
            'VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)'
        let params = [
            this.uid,
            this.name,
            null,
            new Date(),
            null,
            100,
            0,
            200,
            0,
            "1.1",
            "1.1"
        ]
        let db = new database();
        db.runQuery(query, params);
    }
    async checkIfNew() {
        let query = 'SELECT * FROM public.players WHERE uid = $1';
        let params = [this.uid];
        var db = new database();
        var results = getPlayerRecord();

        if (results.rows.length < 1) {
            return true;
        } else {
            return false;
        }
    }
    async getPlayerRecord(){
        let query = 'SELECT * FROM public.players WHERE uid = $1';
        let params = [this.uid];
        var db = new database();
        return await db.fetch(query, params);
    }
    async buildFromDB(){
        this.#playerRecord = getPlayerRecord();
        this.equipItems();
        this.fillInventory();
        this.assignStats();
        this.assignPlayerInfo();
    }
    equipItems(){
        equippedWeapon = this.getEquippedWeapon();
        equippedArmor = this.getEquippedArmor();
    }
    fillInventory(){
        this.inventory = new Inventory(this.getInventoryWeapons(), this.getInventoryArmor(), this.getConsumables(), this.getRawMaterials(), this.getChests);
    }
    getEquippedWeapon(){
        var cache = new weaponCache();
        let IDs = this.getRecordEquippedWeaponIDs();
        return cache.getWeapons(IDs);
    }
    getEquippedArmor(){
        var cache = new armorCache();
        let IDs = this.getRecordquippedArmorIDs();
        return cache.getArmors(IDs);
    }
    getInventoryWeapons(){
        var cache = new weaponCache();
        let IDs = this.getRecordRecordInventoryWeapons();
        return cache.getWeapons(IDs);
    }
    getInventoryArmor(){
        var cache = new armorCache();
        let IDs = this.getRecordInventoryArmorIDs();
        return cache.getArmors(IDs);
    }
    getConsumables(){
        var cache = new consumableCache();
        let IDs = this.getRecordEquippedArmorIDs();
        return cache.getConsumables(IDs);
    }
    getRawMaterials(){
        var cache = new rawMaterialsCache();
        let IDs = this.getRecordRawMaterialIDs();
        return cache.getRawMaterialIDs(IDs);
    }
    getChests(){
        var cache = new chestCache();
        let IDs = this.getRecordChestIDs();
        return cache.getChests(IDs); 
    }
    getRecordEquippedWeaponIDs(){
        var IDstrings = this.#playerRecord.equipped_items.filter(IDs => IDs[0] == "1");
        return IDstrings.map(Number);
    }
    getRecordEquippedArmorIDs(){       
        var IDstrings =  this.#playerRecord.equipped_items.filter(IDs => IDs[0] == "2");
        return IDstrings.map(Number);
    }
    getRecordInventoryWeaponIDs(){
        var IDstrings =  this.#playerRecord.items.filter(IDs => IDs[0] == "1");
        return IDstrings.map(Number);
    }
    getRecordInventoryArmorIDs(){
        var IDstrings =  this.#playerRecord.equipped_items.filter(IDs => IDs[0] == "2");
        return IDstrings.map(Number);
    }
    getRecordConsumableIDs(){
        var IDstrings =  this.#playerRecord.equipped_items.filter(IDs => IDs[0] == "3");
        return IDstrings.map(Number);
    }
    getRecordRawMaterialIDs(){
        var IDstrings =  this.#playerRecord.equipped_items.filter(IDs => IDs[0] == "4");
        return IDstrings.map(Number);
    }
    getRecordChestIDs(){
        var IDstrings =  this.#playerRecord.equipped_items.filter(IDs => IDs[0] == "9");
        return IDstrings.map(Number);
    }
    assignRecordStats(){
        stats = new Stats(this.#playerRecord.stats);
    }
    assignRecordPlayerInfo(){
        this.current_stage = dbResults.current_stage;
        this.max_stage = dbResults.max_stage;
        this.currency = dbResults.currency;
        this.premiumCurrency = dbResults.premium_currency;
        this.max_stage = dbResults.max_stage;
        this.energy = dbResults.energy;
        this.level = dbResults.current_level;
        this.experience = dbResults.xp;
    }
    async updatePlayerRecord(){
            let query =
                'UPDATE public.players SET items = $1, stats = $2, energy = $3, xp = $4, currency = $5, premium_currency = $6, current_stage = $7, max_stage = $8' +
                ', equipped_items = $9 WHERE uid = $10' 
            let params = [
                this.getInventoryIDs(),
                this.getStatsArray(),
                this.energy,
                this.experience,
                this.currency,
                this.premiumCurrency,
                this.currentStage,
                this.maxStage,
                this.getEquippedItemsIDs(),
                this.uid
            ]
            let db = new database();
            db.runQuery(query, params);
    }
    getEquippedItemsIDs(){
        var allEquippedItemsIDs = new Array();
        allEquippedItemsIDs.concact(this.getEquippedWeaponID());
        allEquippedItemsIDs.concact(this.getEquippedArmorIDs());
        return allEquippedItemsIDs();
    }
    getEquippedWeaponID()
    {
        return this.equippedWeapon._id;
    }
    getEquippedArmorIDs(){
        return this.equippedArmor.map(function(item){
            return item._id;
        })
    }
    getInventoryIDs(){
        return this.inventory.getAllIDs();
    }
    getStatsArray(){
        return this.stats.getStatsArray();
    }
}

module.exports = player
