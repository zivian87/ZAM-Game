
var main = (function main(){
    const commandController = require('./controllers/commandController.js')
    const discordView = require('./views/discordView.js');

    let controller = new commandController();
    let view = new discordView(controller);

    view.loginMessage();
    view.listenForInput();

    return main; 

}()); 
