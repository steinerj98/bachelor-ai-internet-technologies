var controller = require('./controller');

/** 
    Die Router komponente übergibt die Anfrage an eine Methode der  
    Controller Komponente
 */
module.exports = function (app) {
    app.get('/', controller.indexAction);
    app.get('/list', controller.contactAction);
};
