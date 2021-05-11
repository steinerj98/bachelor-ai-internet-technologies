'use strict';

class View{
 
    constructor(cData){
        this.contact =  cData;
    }

    render(){
        return "<br>"+this.contact.data[0]+"<br>"
    }


}

module.exports = View;