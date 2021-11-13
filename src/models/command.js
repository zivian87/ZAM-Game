const test = require('./test.js');

class command{
    #userCommand
    #commandType
    constructor(userCommand, type)
    {
        this.#userCommand = userCommand;
        this.#commandType = type;
    }
    getReponse(){
        if(this.#commandType == "test")
        {
            let testCommand = new test();
            let message = testCommand.getMessage(1);
            return message;
        }
    }    
}
module.exports = command