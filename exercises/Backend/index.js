express = require('express')

var app = express()

app.use(express.static('public'))
app.use('/css', express.static(__dirname + '/public/css'))
app.use('/js', express.static(__dirname + '/public/js'))

app.listen(8080, function() {
    console.log("Server started...listen on port 8080")
})

app.get("/antwort", function(req, res) {
    if (!checkNames(req.query.vorname, req.query.nachname)) {
        res.send("Input not okay. The first- or lastname contains a special character");
    } else if(!checkPLZ(req.query.postleitzahl)) {
        res.send("Input not okay. The postcode may only consist of numbers");
    }  else if(!checkEMail(req.query.email)) {
        res.send("Input not okay. The E-Mail address doesn't contain @-symbol");
    } else {
        res.send("Input okay. Hello " + req.query.vorname + ", " + req.query.nachname);
    }
})

/*
    Check names of wrong values in there. If so the return value is false. If the names are correct, return value is true
*/
function checkNames(firstname, lastname) {
    if (stringContains(firstname, "+") || stringContains(firstname, "-") || stringContains(firstname, "!")) {
         return false
    } else if (stringContains(lastname, "+") || stringContains(lastname, "-") || stringContains(lastname, "!")) {
        return false
    }

    return true
}

function stringContains(s, c) {
    for (i in s) {
        if (s[i] == c) {
            return true
        }
    }

    return false
}

/*
    Check names of wrong values in there. If so the return value is false. If the names are correct, return value is true
*/
function checkPLZ(plz) {
    numberPLZ = Number.parseInt(plz)
    for (i in plz) {
        if (plz[i] != "0" && plz[i] != "1" && plz[i] != "2" && plz[i] != "3" && plz[i] != "4" && plz[i] != "5" && plz[i] != "6" && plz[i] != "7" && plz[i] != "8" && plz[i] != "9") {
            return false
        }
    }

    return true
}

/*
    Check names of wrong values in there. If so the return value is false. If the names are correct, return value is true
*/
function checkEMail(email) {
    if (stringContains(email, "@")) {
        return true
    }

    return false
}