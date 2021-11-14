
var main = (function main(){
    const commandController = require('./controllers/commandController.js')
    const playerController = require('./controllers/playerController.js')

    const discordView = require('./views/discordView.js');

    let controller = new commandController();
    let pController = new playerController();

    let view = new discordView(controller);

    view.loginMessage();
    view.listenForInput();

    return main; 

}()); 
