const npc = require('./npc')

class npcCache {
    #npc
    constructor() {
        this.#npc = new Map()
        this.generateCache()
    }

    generateCache() {
        // TODO: create dictionary
        this.#npc.set(
            109,
            createNpc(
                109,
                'Mr. Monster',
                'Common',
                'Mr. Monster is big and scary',
                100
            )
        )
    }

    createNpc(inId, inName, inRarity, inDescription, inKillExperience) {
        npcData = {
            id: inId,
            name: inName,
            rarity: inRarity,
            description: inDescription,
            killExperience: inKillExperience,
        }
        return new npc(npcData)
    }
}
