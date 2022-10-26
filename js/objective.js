"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */

// function isANumber(input) {
//     return typeof input === "number"
//     if (typeof num === "number")  {
//         return true;
//     }else (typeof(parseFloat(isNaN == num)))
//     {
//         return false;
//     }
// }
function isANumber(input) {
    return typeof input === "number"
    // if (typeof num === "number")  {
    //     return true;
    // }else (typeof(parseFloat(isNaN == num)))
    // {
    //     return false;
    // }
}
//
// function increment (num) {
//     if (!isNaN(parseFloat(num))) {
//         return parseFloat(num) + 1;
//     } else {
//         return false;
//     }
// }
//
// function decrement() {
//     if (!isNaN(parseFloat(num))) {
//         return parseFloat(num) - 1;
//     } else {
//         return false;
//     }
// }
//
// function getHighestNumber(a,b,c) {
//     if (isNaN(parseFloat(a)) || isNaN(parseFloat(b)) || !isNaN(parseFloat(c))) {
//         return false;
// //     }else if (a > b && a > c){
// //         return parseFloat(a);
// //     }else if (a > b && a > c) {
// //         return parseFloat(b);
// //     }else  (a > b && a > c){
// //         return parseFloat(c);
// // }
// //     }
    } else {
        return Math.max(a, b, c);
    }
}
//
// function parseNumber(input) {
//     return parseFloat(input)
// }
// //     if (typeof str == "string")  {
// //         return true;
// //     }else (typeof(parseFloat(isNaN !== str)))
// //     {
// //         return false;
// //     }
// // }
function add(x, y){
    if (isNaN(parseFloat(x)) || isNaN(parseFloat(y))) {
        return false;
    }else{
        return parseFloat(x) + parseFloat(y);
    }
}
//
function multiply(x, y){
    if(isNaN(parseFloat(x)) || isNaN(parseFloat(y))){
        return false;
    }else{
        return parseFloat(x) * parseFloat(y);
    }
}
//
// function square(x){
// // return multiply(x,x);
//     if(isNaN(parseFloat(x))){
//         return false;
//     }else{
//         return Math.pow(x ^ 2);
//     }
// }

function sumOfSquares(x, y){
    // return add(square(x), square(y));
    if(isNaN(parseFloat(x)) || isNaN(parseFloat(y))) {
        return false;
    }else{
        return (x*x) + (y*y);

        function sumOfSquares(a,b){
            if(!isNaN(parseNumber(a)) && !isNaN(parseNumber(b))) {
                return square(a) + square(b);
            } else {
                return false;
            }
        }

function sumOfSquares(x, y){
    // return add(square(x), square(y));
    if(isNaN(parseFloat(x)) || isNaN(parseFloat(y))) {
        return false;
    }else{
        return Math.pow((x ^ 2) + Math.pow(y ^ 2));
    }
}

// function isPalindrome(str) {
//     if(typeof str === "string") {
//         let lowRegStr = str.toLowercase()
//         let reverseStr = lowRegStr.split("").reverse().join('');
//         return lowRegStr === reverseStr;
//     }else {
//         return false;
//     }
// }







// Define a function named increment that takes in an input and adds 1 to it if the input is numeric. If the input is not numeric, then return false.
// let i = '';

// function increment(input){
//         if (typeof i == !isNaN && "string")){
//             return input(i += 1);
//         }else(typeof(i === isNaN && "boolean" && null))
//     {
//             return false;
//         }
// }

// function decrement(input){
//     if (typeof(isANumber == !isNaN && null && "boolean")){
//         return input -= 1;
//     }else{
//         return false;
//     }
// }

// expected output: "x:4, y:3"
// Define a function named parseNumber that parses (converts) a numeric String and returns its value as a number, the function should be able to decide if it should be parsing an Integer or a Float value.


// function parseNumber(num) {
//     if (typeof str == "string")  {
//         return true;
//     }else (typeof(parseFloat(isNaN !== str)))
//     {
//         return false;
//     }
// }
// Write a function named add that takes in two inputs. If both inputs provided are numeric, add will return the sum of both inputs. If one or both inputs is not numeric, add should return false.
// let x = 0;
// let sum = parseFloat(input1 + input2)
// function add (input1, input2){
//        return (typeof(parseFloat(input1 + input2)));
//
// }

// function isPalindrome(input) {
//     return typeof input === "";
// }

function isANumber (input){
    if(typeof input === "number") {
        return true;
    }else typeof(!isNaN(parseFloat()))

}