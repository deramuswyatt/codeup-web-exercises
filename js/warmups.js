// Write a function that when passed an object will return the value of the object’s price property.
//     Ex. let obj = {name: “Potatoes”, quantity: 2, price: “$7.89"};
// getPrice(obj); // returns “$7.89”

function getPrice(obj){
    return obj.price

}
let oranges ={
    name: "oranges",
    quantity: 2,
    price: "7.89"

}
console.log(getPrice(oranges));

// Write a function that when passed an array will return the longest string from the array.
//    ex. const arr = [“Green”, “Blue”, “Periwinkle”];
// getLongestString(arr) // Returns “Periwinkle”

function longestString (arr) {
    let longestStr = '';
    for(let str of arr){
        if (str.length > longestStr.length){
            longestStr = str;
        }
    }
    return longestStr;

    }
const colors = ["green", "blue", "red", "orange"];
console.log(longestString(colors));