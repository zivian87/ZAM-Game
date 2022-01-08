const NPC = require('./NPC')

class NPCCache {
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
                100,
                1
            )
        )
    }

    createNpc(
        inId,
        inName,
        inRarity,
        inDescription,
        inKillExperience,
        inStage
    ) {
        npcData = {
            id: inId,
            name: inName,
            rarity: inRarity,
            description: inDescription,
            killExperience: inKillExperience,
            state: inStage,
        }
        return new NPC(npcData)
    }
}
