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
//     let colors = [“Green”, “Blue”, “Periwinkle”];
// getLongestString(arr) // Returns “Periwinkle”
// function getLongestString(arr){
//  let longestStr = " ";
//  colors.forEach(function(color){
//  if(color.length > longestStr.length) {
//      longestStr = color;
//  }
//  });
//    return longestStr;
// }
// console.log(getLongestString(colors));

// function getLongestStr(arr){
//     for
// }

function getLongestString(arr){
    let longestStr = "";

    for(let str of arr ){
        if(str.length > longestStr.length){
            longestStr = str;
        }
    }
    return longestStr;
}

let colors = ['green', 'purplemeangreen', 'indigoflex'];
console.log(getLongestString(colors));
//////********************************/////////////////////

// function getTallestHamster (arr) {
//     let tallest = {heightInMM: 0};
//     hamsters.forEach(function (hamster) {
//         if (hamster.heightInMM > tallest.heightInMM) {
//             tallest = hamster
//         }
//     });
//     return tallest;
// }


    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i].heightInMM > tallest.heightInMM) {
    //         tallest = arr[i];
    //     }
    // }
    // return tallest;
// }

    // const hamsters = [
    //     {
    //         name: "Hamtaro",
    //         heightInMM: 86,
    //         fur: ['orange', 'white'],
    //         gender: "male",
    //         dateOfBirth: "August 6"
    //     }, {
    //         name: "Bijou",
    //         heightInMM: 75,
    //         fur: ['white'],
    //         gender: "female",
    //         dateOfBirth: "July 10"
    //     }, {
    //         name: "Oxnard",
    //         heightInMM: 100,
    //         fur: ['grey', 'white'],
    //         gender: "male",
    //         dateOfBirth: "May 3"
    //     }, {
    //         name: "Boss",
    //         heightInMM: 120,
    //         fur: ['brown', 'white'],
    //         gender: "male",
    //         dateOfBirth: "September 21"
    //     }, {
    //         name: "Snoozer",
    //         heightInMM: 85,
    //         fur: ['brown', 'white', "pink"],
    //         gender: "male",
    //         dateOfBirth: "January 14"
    //     }
    // ];

    // console.log(getTallestHamster(hamsters));// should return {name: "Boss", heightInMM: 120, fur: ['brown', 'white'], gender: "male", dateOfBirth: "September 21"};


// Warmup: Write FizzBuzz from 1-100;
// Numbers evenly divisible by 3 should be replaced by Fizz
// Numbers evenly divisible by 5 should be replaced by Buzz
// Numbers evenly divisible by both 3 and 5 should be replaced by FizzBuzz
// All other numbers should be printed in the console.
//CHECK FOR MOST SPECIFIC FIRST

// function fizzBuzz () {
//     for(let i = 1; i < 101; i++) {
//         if (i % 15 === 0){
//             console.log("FizzBuzz");;
//         }else if(i % 5 === 0){
//             console.log("Buzz");;
//         }else if(i % 3 === 0){
//             console.log("Fizz");;
//         }else{
//             console.log(i);
//         }
//     }
// }
// fizzBuzz();


function buzzFizz (){
    for(let i = 1; i < 101; i++){
        if(i % 16 === 0){
            console.log("BuzzFizz")
        }else if(i % 8 === 0){
            console.log("Fizz");
        }else if(i % 2 === 0){
            console.log("Buzz")
        }else console.log(i);{

        }
    }

}
buzzFizz();


// Today's warmup: Write a function that takes in an array of objects and returns the average of the heightInMM properties from each object.
const hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    } , {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    } , {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    } , {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "September 21"
    } , {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14"
    }
];

// getAverageHeight(hamsters); // should return 93.2;

function getAverageHeight(arr) {
//     let totalHeight = 0;
//     for (let element of arr) {
//         totalHeight += element.heightInMM
//     }
//     return totalHeight / arr.length;
// }

console.log(getAverageHeight(hamsters));
for(let i = 0; i < grades.length; i++) {
        total += grades[i];
    }
    let avg = total / grades.length;

    return avg;


}




// #LAO Review
// ##Questions
// 1. Write a function that takes in a grocery item object and returns a string representing the price per item for that object.
//
//     ```
// ex.
// let potatoes = {
// 	name: potatoes,
// 	quantity: 20,
// 	totalPrice: 47
// };
//
// getPricePerItem(potatoes) // returns "$2.35"
// ```
//
// 2. Write a function that takes in two string arguments: the first being the string assessed, and the second being a single letter. The function should return a count of the occurrences of the letter (second argument) within the string (first argument). This function should count both upper and lowercase instances of the letter.
//
//     ```
// ex.
// countOccurrencesOfLetter("horseradish", "s") // returns 2
// countOccurrencesOfLetter("Microsoft Excel: Professional Edition". "E") // returns 4
// countOccurrencesOfLetter("Sanrio", "x") // returns 0
// ```
//
// 3. Write a function that takes in an array of  grocery item objects and returns the object with the highest `weightInGrams` property.
//
//     ```
// ex.
// const cart = [
// 	{
// 		name: "Kingsford Charcoal",
// 		weightInGrams: 4535
// 	}, {
// 		name: "Krazy Glue",
// 		weightInGrams: 5
// 	}, {
// 		name: "NVIDIA RTX 4090",
// 		weightInGrams: 2186
// 	}
// ];
// getHeaviestItem(cart) // returns {name: "Kingsford Charcoal", weightInGrams: 4535}
// ```
//
// 4. Write a function that takes in an array of numbers and returns an array of numbers from the original array that are evenly divisible by 13. If a number is not evenly divisible by 13, it should not be returned. If no elements within the array are evenly divisible by 13, the function should return an empty array.
//
//     ```
// ex.
// const arr1 = [24, 25, 26, 27, 29];
// const arr2 = [13, 26, 39, 52, 65];
// const arr3 = [0, 1, 2, 3, 4, 5];
//
// getAllDivisibleByThirteen(arr1) // returns [26]
// getAllDivisibleByThirteen(arr2) // returns [13, 26, 39, 52, 65]
// getAllDivisibleByThirteen(arr3) // returns []
// ```
//
// 5. Write a function that takes in a string and returns an object with the following properties:
//     1. `string` which is to be set the to the argument passed into the function.
// 2. `numberOfWords` which is to be set to the number of words within the string.
// 3. `instancesOfE` which to be set to the number of instances of the letter "E" within the argument passed into the function. The count should reflect instances of both uppercase and lowercase "E" (HINT: a previous function maybe useful in achieving this).
//
// ```
// ex.
// reviewString("Dielectric Grease") // returns {string: "Dielectric Grease", numberOfWords: 2, instancesOfE: 3}
// reviewString("Street Fighter EX3") // returns {string: "Street Fighter EX3", numberOfWords: 3, instancesOfE: 4}
// reviewString("99") // returns {string: "99", numberOfWords: 1, instancesOfE: 0}
// ```








// function longestString (arr) {
//     let longestStr = '';
//     for(let str of arr){
//         if (str.length > longestStr.length){
//             longestStr = str;
//         }
//     }
//     return longestStr;
//
//     }
// const colors = ["green", "blue", "red", "orange"];
// console.log(longestString(colors));