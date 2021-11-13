
class test {
    #testDictionary
    constructor() {
        this.buildDictionary();
    }

    buildDictionary() {
        this.#testDictionary = new Map();
        this.#testDictionary.set(1, "Pulled from Test Dictionary");
    }
    getMessage(key){
        return this.#testDictionary.get(key);
    }
}
module.exports = test;