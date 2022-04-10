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
                1,
                false
            )
        )
    }

    createNpc(inId, inName, inRarity, inDescription, inKillExperience, inStage, inIsBoss) {
        npcData = {
            id: inId,
            name: inName,
            rarity: inRarity,
            description: inDescription,
            killExperience: inKillExperience,
            stage: inStage,
            isBoss: inIsBoss
        }
        return new NPC(npcData)
    }

    getNPCsByStage(stageID){
        var valuesArray = new Array([...this.#npc].values());
        return valuesArray.filter(value => value.stageID == stageID);
    }
}

module.exports = NPCCache
