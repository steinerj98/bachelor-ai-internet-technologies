'use strict';
class Contact {
    constructor() {
        this.name = "keiner";
        this.nachname ="keiner"; 
    }
    getName() {
        return this.name;
    }
    getNachName() {
        return this.name;
    }

    setName(Name,Nachname) {
        this.name=Name;
        this.nachname = Nachname;
    }
}
module.exports = Contact;