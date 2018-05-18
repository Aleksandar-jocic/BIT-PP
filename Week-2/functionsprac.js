/*

'use strict';



function result (names, grades) {

    var student = "";
    var current = 0;
    for (var i = 0; i < names.length; i++) {
        if (mark(grades, i) >= 6) {
            student += names[i] + " acquired " + grades[i] + " points and earned grade " + mark(grades, i) + "\n"; 
        } else {
            student += names[i] + " acquired " + grades[i] + " points and failed to complete the exam." + "\n"
        }          

         function mark(grades, i) {
            
        
            if (grades[i] < 51) {
                current = 5;
            } else if (grades[i] >= 51 && grades[i] <=60) {
                current = 6;
            } else if (grades[i] >= 61 && grades[i] <=70) {
                current = 7;
            } else if (grades[i] >= 71 && grades[i] <=80) {
                current = 8;
            } else if (grades[i] >= 81 && grades[i] <=90) {
                current = 9;
            } else if (grades[i] >= 91 && grades[i] <=100) {
                current = 10;
            } return current;
        }

        
    }

    return student;
} 

var names =  [ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill", "Aleksa", "Mik" ];
var grades = [ 50, 39, 63, 72, 99, 51, 83, 59, 39, 100];

var res;
res = result(names, grades);
console.log(res);

*/
//*********************************** CET ZAD **************************** */

// var value = [ 13, 11, 15, 5, 6, 1, 8, 12 ];

// function sort (value) {
//     var outputString = [];
//     var j=0;


//     for (i = 1; i < value.length; i++) {
//         if (value[i]
//     } return outputString;
// }
// console.log(sort(value));