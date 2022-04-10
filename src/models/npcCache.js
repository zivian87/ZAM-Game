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

<<<<<<< HEAD
    createNpc(inId, inName, inRarity, inDescription, inKillExperience, inStage, inIsBoss) {
=======
    createNpc(
        inId,
        inName,
        inRarity,
        inDescription,
        inKillExperience,
        inStage
    ) {
>>>>>>> 01d7137d6a240f6df0944ecaeb96d50287a54b1b
        npcData = {
            id: inId,
            name: inName,
            rarity: inRarity,
            description: inDescription,
            killExperience: inKillExperience,
<<<<<<< HEAD
            stage: inStage,
            isBoss: inIsBoss
=======
            state: inStage,
>>>>>>> 01d7137d6a240f6df0944ecaeb96d50287a54b1b
        }
        return new NPC(npcData)
    }

    getNPCsByStage(stageID){
        var valuesArray = new Array([...this.#npc].values());
        return valuesArray.filter(value => value.stageID == stageID);
    }
}

module.exports = NPCCache
