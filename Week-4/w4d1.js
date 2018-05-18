//drugi zad

// function reverse_a_number(n) {
//     n = n + "";
//     return n.split("").reverse().join("");
// }
// console.log(reverse_a_number(12345));

// treci zad

// var a = "Webmaster";

// a = a.split("").sort().join("");

// console.log(a);


// cetvrti zad



// var a = "Republic of Serbia";

// function sorter(a) {
//     var b = "";
//     a = a.split(" ");
//     for (var i = 0; i < a.length; i++) {
//         b = b + a[i].split("").sort().join("") + " ";
//     } return b
// }

// console.log(sorter(a));

// peti zad

// var a = "John Snow";

// a = a.split(" ");

// console.log(a);

// sesti zad

// var a = "John Snow";

// a = a.slice(0, 6) + ".";


// console.log(a);

// sedmi zad 

// var main = 123;
// var s = '0000';
// var dir = 'l'

// function pad(main, s) {

//     if (dir === 'l') {

//     }
// }

// osmi zad

// var a = "js string exercises";

// var output = '';
// var letter = '';

// letter = a[0].toUpperCase();

// output += letter + a.slice(1, a.length);


// console.log(output);

// deveti zad

var a = "somerandomaddress@example.com";

var output = '';

var part = '';

var res = '';

output = a.split('@');

part = part + output[0].slice(0, output[0].length / 2);

res = part + "...@" + output[1];

console.log(res);

// deseti zad 

