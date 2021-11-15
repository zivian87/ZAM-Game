
var main = (async function main(){
    const commandController = require('./controllers/commandController.js')
    const playerController = require('./controllers/playerController.js')

    const discordView = require('./views/discordView.js');

    let pController = new playerController();

    let view = new discordView();

    view.loginMessage();
    view.listenForInput();

    return main; 

}()); 
