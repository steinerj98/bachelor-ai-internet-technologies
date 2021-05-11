var Contact = require('./model');
var View = require('./view');


module.exports = {
    indexAction: indexAction,
    contactAction: contactAction
};
function indexAction (req, res) {
    res.send('My first express application');
}

function contactAction (req, res) {
    var contact = new Contact();
    var mview = new View(contact);
    res.send(mview.render());
}