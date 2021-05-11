var express = require('express');
var app = express();

/**
   Wir binden hier eine Routerkomponente ein und übergeben ihr die 
   Express Komponente
 */
require('./router')(app);
app.listen(8080, function () {
    console.log('Server listening on port 8080')
});