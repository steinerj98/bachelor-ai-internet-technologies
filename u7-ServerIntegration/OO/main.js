var Contact = require('./model');

function testAlles(){
    let contact1 = new Contact();
    let contact2= new Contact();

    contact1.setName("Sabine","Krone");
    contact2.setName("Ricke","Vollposten");

    console.log(contact1.getName());
    console.log(contact2.getName());
}

testAlles();