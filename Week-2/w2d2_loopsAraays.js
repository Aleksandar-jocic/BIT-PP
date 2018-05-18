

// ********************************************************** PRVI ZADATAK **********************************************************
/*
var e = 7;
var a = [5, -4.2, 3, 7];
var ind = false;


for (i = 0; i <= a.length - 1; i++) {
    // if (e === a[i]) {
    //     console.log('yes, it is.')
    // } else if (i === a.length - 1) {
    //     console.log("no");
    // }


    if (a[i] === 0) {

        ind = true;
    }
}

if (ind === false) {

    console.log("NO");
} else {


    console.log("Yes");
}
*/

// ******************************************** drugi zad *************************
/*
var a = [-3, 11, 5, 3.4, -8];

for (i = 0; i < a.length; i++) {
    if (a[i] > 0) {
        a[i] *= 2;
    }
}
console.log(a);

*/

//**********************************treci zad ******************************* */


// var a = [-5, -10, -14, 2, -1, -14, -14]

// var min = a[0];
// var index = 0;



// for (var i = 1; i < a.length; i++) {

//     if (a[i] < min) {

//         min = a[i];
//         index = i;
//     }

// }


// console.log(min);
// console.log(index);




// ***************************** 4 zad ******************************
/*
var a = [-7, -7, 4, 2, 2, -1, 6, 7, 16, -3];

var min = a[0];
var minLarger = a[1];

for (var i = 0; i < a.length; i++) {
    if (a[i] < min) {
        minLarger = min;
        min = a[i];
    }
    else if (a[i] < minLarger) {

        minLarger = a[i];

    }
}

console.log(min);
console.log(minLarger);



*/

// a[i] = b[0]

//**************************** PETI ZADATAK ***************************


// var a = [3, 11, -5, -3, 2];

// var sum = 0;

// for (var i = 0; i < a.length; i++) {
//     if (a[i] > 0) {
//         sum += a[i];
//     }
// }
// console.log(sum);


//.*********************** SESTI ZADATAK ********************************

// var a = [2, 4, 2, 7, -2, 4, 2];
// //var b = [2, 6, 3, 9, 7, 1, 2];

// var j = a.length - 1;
// var i = 0;
// var track = true;

// for (i = 0, j = a.length - 1; i <= j; i++ , j--) {
//     if (a[i] !== a[j]) {

//         track = false;
//         break;
//     }

// }
// if (track == true) {
//     console.log("SYM");
// }
// else {
//     console.log("NOT SYM");
// }



//.*********************** SEDMI ZADATAK ********************************

// var a = [4, 5, 6, 2];
// var b = [3, 8, 11, 9];

// var iw = [];
// var j = 0

// for (var i = 0, j = 0; i < a.length; i++ , j += 2) {
//     iw[j] = a[i];
//     iw[j + 1] = b[i];
// }
// console.log(iw);

//.*********************** OSMI ZADATAK ********************************
/*

var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9];

var c = [];

var j = 0;
for (var i = 0, j = 0; i < a.length; i++ , j++) {
    c[j] = a[i];
    c[j + a.length] = b[i];
}

console.log(c);


*/

//.**************!!!!!!!!!!!!!!!!!!!********* PETI ZADATAK-druga strana*****************!!!!!!!!!!!!!!!!!!!!!!!!!!!!***************


// **************************************** SEDM ZAD-DR STRANA **************************!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

var n = 923;
var digit;

var digits = [];
var i = 0;

while (n > 0) {
    digit = n % 10;
    n = (n - digit) / 10;
    // console.log(digit);
    digits[i] = digit;
    i++;
}

// var f;
// var l;
// for(f=0; l=digits.length -1; f<1; f++, l--) 
// console.log(digits);



//


var a = [4, 8, 15, 16, 23, 42];
var i = 0;

var sum = 0;

while (a[i] % 2 == 1) {
    sum = sum + a[i];
}
console.log(sum);