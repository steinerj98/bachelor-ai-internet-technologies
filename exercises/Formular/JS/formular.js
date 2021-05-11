function sendMessage() {
    var vorname = document.getElementById("vorname").value;
    var nachname = document.getElementById("nachname").value;
    var email = document.getElementById("email").value;
    var firma = document.getElementById("firma").value;
    var straße = document.getElementById("straße").value;
    var hausnummer = document.getElementById("hausnummer").value;
    var postleitzahl = document.getElementById("plz").value;
    var ort = document.getElementById("ort").value;

    if (!checkNames(vorname, nachname)) {
        showError("The first- or lastname contains a special character")
    } else if(!checkPLZ(postleitzahl)) {
        showError("The postcode may only consist of numbers")
    }  else if(!checkEMail(email)) {
        showError("The E-Mail address doesn't contain @-symbol")
    } else {
        showSuccessMessage()
        // convert data to json and send to back-end
    }
}

function showError(errorMsg) {
    var successSection = document.getElementById("successSection");
    if (successSection.style.visibility == "visible") {
        successSection.style.visibility = "hidden";
    }

    var errorSection = document.getElementById("errorSection");
    errorSection.style.visibility = "visible";

    var errorSection = document.getElementById("errorMsg");
    errorSection.innerHTML = errorMsg
}

function showSuccessMessage() {

    var errorSection = document.getElementById("errorSection");
    if (errorSection.style.visibility == "visible") {
        errorSection.style.visibility = "hidden";
    }

    var successSection = document.getElementById("successSection");
    successSection.style.visibility = "visible";

}

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