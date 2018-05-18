// // zbir 2 broja
// function sum(a, b) {
//     var result;
//     result = a + b;

//     return result;

// }



// var s;
// s = sum(2, 3);

// // console.log(s)


// ___________________________________ prvi zadatak_______________________________

/*
function isString(s) {
    if (typeof s === "string") {
        return true;
    } else {
        return false;
    }
}

var a = 1;
var result = isString(a)
console.log(result);

*/
// ___________________________________ drugi zadatak_______________________________
/*

function blank(x) {
    if (x === "") {
        return true;
    }
    else {
        return false;
    }
}


var djoka = 12;
var bla = "";
var result = blank(bla);

console.log(result);
*/
// ___________________________________ treci zadatak_______________________________

/*
function fun(x, n) {
    var result = ""
    for (var i = 1; i <= n; i++) {

        result = result + x;
    }
    return result;
}

var s = "Ha";
var n = 50;

var result2 = fun(s, n);

console.log(result2);

*/

// ___________________________________ cetvrti zadatak_______________________________

/*
function Tracker(n, l) {
    var broj = 0;
    for (var i = 0; i < n.length; i++) {
        if (n[i] === l) {
            broj = broj + 1;
        }

    } return broj;
}


var n = "Aleksandar"
var l = "z"
var result = 0;
result = Tracker(n, l);
console.log(result);
*/

// ___________________________________ peti zadatak_______________________________

/*
function firsttrack(string, characterToFind) {
    for (var i = 0; i < string.length; i++) {
        if (string[i] === characterToFind) {
            return i + 1;
        }
    }

    return -1;
}

var n = "Djordje"
var l = "D"

var result = 0;
result = firsttrack(n, l);
console.log(result);

*/

// ___________________________________ sesti zadatak_______________________________

/*
function lasttrack(string, characterToFind) {
    for (var i = string.length - 1; i >= 0; i--) {
        if (string[i] === characterToFind) {
            return i + 1;
        }
    }

    return -1;
}

var n = "djordjoe"
var l = "o"

var result = 0;
result = lasttrack(n, l);
console.log(result);
*/

// ___________________________________ sedmi zadatak_______________________________


function array(s) {
    var res = [];
    for (i = 0; i < s.length; i++) {
        if (s[i] === " ") {
            res[i] = null;
        } else {
            res[i] = s[i];
        }

    } return res;

}


var s = "we is smort"; ``

var result = [];
result = array(s);
console.log(result);