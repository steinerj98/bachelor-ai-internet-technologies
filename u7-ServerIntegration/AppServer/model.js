'use strict';
class Contact {
    constructor() {
        this.data = [
            'Thomas', 'Müller', 'Reinfeld 3', 'Muehrfeld'
        ];
    }
    getContact() {
        return this.data;
    }
}
module.exports = Contact;