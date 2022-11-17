
// Write a function that when passed an object will return the value of the object’s price property.
//     Ex. let obj = {name: “Potatoes”, quantity: 2, price: “$7.89"};
// getPrice(obj); // returns “$7.89”

// function getPrice(obj){
//     return obj.price
//
// }
// let oranges ={
//     name: "oranges",
//     quantity: 2,
//     price: "7.79"
//
// }
// console.log(getPrice(oranges));

// Write a function that when passed an array will return the longest string from the array.

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

// function getAverageHeight(arr) {
//     let totalHeight = 0;
//     for (let element of arr) {
//         totalHeight += element.heightInMM
//     }
//     return totalHeight / arr.length;
// }

// console.log(getAverageHeight(hamsters));
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
let potatoes = {
	name: "potatoes",
	quantity: 20,
	totalPrice: 47
};
//
// getPricePerItem(potatoes) // returns "$2.35"
// ```
//

function getPricePerItem(obj){
    return obj.totalPrice;

}

console.log(getPricePerItem(potatoes));

function getPrice(obj){
    return obj.price

}

// 2. Write a function that takes in two string arguments:
//
// the first being the string assessed,
// and the second being a single letter.
//
// The function should return a count of the occurrences of the letter (second argument) within the string (first argument).
//
// This function should count both upper and lowercase instances of the letter.
//
//
//
//     ```
// ex.
// countOccurrencesOfLetter("horseradish", "s") // returns 2
// countOccurrencesOfLetter("Microsoft Excel: Professional Edition". "E") // returns 4
// countOccurrencesOfLetter("Sanrio", "x") // returns 0
// ```

let count = 0;
function countOccurrencesOfLetter(strAss, singLet){
    let letter_Count = 0;
    for (var position = 0; position < str.length; position++)
    {
        if (str.charAt(position) == letter)
        {
            letter_Count += 1;
        }
    }
    return letter_Count;
}
}

function countOccurrencesOfLetter(word, letter) {
    let number = 0
    for (i=0; i < word.length; i++) {
        if (word.substring(i, i+1) == letter.toUpperCase() || word.substring(i, i+1) == letter.toLowerCase()){
            number++;
        }
    }
    return number
}

//
// 3. Write a function that takes in an array of  grocery item objects and returns the object with the highest `weightInGrams` property.
//
//     ```
// ex.
const cart = [
	{
		name: "Kingsford Charcoal",
		weightInGrams: 4535
	}, {
		name: "Krazy Glue",
		weightInGrams: 5
	}, {
		name: "NVIDIA RTX 4090",
		weightInGrams: 2186
	}
];

function getHeaviestItem(x){
    let heaviest = {weightInGrams: 0}
    for (i = 0; i < x.length; i++){
        if(x[i].weightInGrams > heaviest.weightInGrams){
            heaviest = x[i];
        }
    }
    return heaviest;
}

console.log(getHeaviestItem(cart))
// getHeaviestItem(cart) // returns {name: "Kingsford Charcoal", weightInGrams: 4535}
// ```
//
// 4. Write a function that takes in an array of numbers and returns an array of numbers from the original array that are evenly divisible by 13. If a number is not evenly divisible by 13, it should not be returned. If no elements within the array are evenly divisible by 13, the function should return an empty array.
//
function getAllDivisibleByThirteen(arr){
    let divide = [];
    for (i=0; i < arr.length; i++){
        if (arr[i] % 13 === 0)
            divide.push(arr[i]);
    }
    return divide;
}
//     ```
// ex.
const arr1 = [24, 25, 26, 27, 29];
const arr2 = [13, 26, 39, 52, 65];
const arr3 = [0, 1, 2, 3, 4, 5];
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
function reviewString(string) {
    let newstring = {string: "",
        numberOfWords: 1,
        instancesOfE: 0};
    newstring.string = string;
    for (i=0; i < string.length; i++) {
        if (string.substring(i, i+1) == "e" || string.substring(i, i+1) == "E"){
            newstring.instancesOfE++
        }
        if (string.substring(i, i+1) == " "){
            newstring.numberOfWords++
        }
    }
    return newstring;
}
// ```
// ex.
// reviewString("Dielectric Grease") // returns {string: "Dielectric Grease", numberOfWords: 2, instancesOfE: 3}
// reviewString("Street Fighter EX3") // returns {string: "Street Fighter EX3", numberOfWords: 3, instancesOfE: 4}
// reviewString("99") // returns {string: "99", numberOfWords: 1, instancesOfE: 0}
// ```
function isPositive(num){
    if(num > 0){
     return true;
    }else{
       return false;
    }
}

console.log(9);

function isFortyTwo(){
    if(num === 42){
      return true;
    }else{
      return false;
    }
}
let numArr = [1, 2, 3, 4,]
let numArr2 = [5, 6, 7, 8, 9,]
function countEvans(arr) {
    let count = 0;
    arr.forEach(function (element) {
        if (element % 2 === 0) {
            count++
        }
    });
    return count;
}

function isAllLowerCase (str){
    if(str === string.toLowerCase()){
        return true;
    }else{
        return false;
    }
}

function returnObject(string){
    let newObj = {};
    newObj.string = string;
    newObj.numberOfWords = countLetters(string, " ")
    newObj.eCount = countLetters(string, "E")
    return newObj;
}



function countLetters(stringOne, letter) {
    let myString = stringOne.toLowerCase();
    let mySubString = letter.toLowerCase();
    let count = myString.split(mySubString).length - 1;
    console.log(count);
    return count;
}


// walk through 2nd assessment//////////////////////////////////
// Write a function named isNegative that accepts a number and returns true or false based on whether the input is negative.
// function isNegative(arg){
    return arg < 0;
}
//Write a function named isTen that accepts a number and returns a boolean that indicates whether or not that number is equal to 10.
function isTen(num){
    return num === 10;
}
//Write a function named double that accepts a number and returns the number doubled.
function double(num){
    return num * 2;
}
//Write a function named remove9s that accepts an array of numbers and returns an array with all the same numbers except for 9.
function remove9s(arr){
    let finalArr = [];
    for(let num of arr){
        if(num !== 9){
            finalArr.push(num);
        }
    }
    return finalArr;
}
//Write a function named average that accepts an array of numbers and returns the average of those numbers.
function average(arr){
    let total = 0;
    for(let num of arr){
        total += num;
    }
    return total / arr.length;
}
//Write a function named countOdds that accepts an array of numbers and returns the number of odd numbers in the array.
function countOdds(arr){
    let count = 0;
    for(let num of arr){
        if(num % 2 !== 0){
            count++;
        }
    }
    return count;
}
//Write a function named averageSales that accepts an array of objects where each object represents a person, and has a sales property. The function should return the average of every object's sales property.
function averageSales(arr){
    let total = 0;
    for(let person of arr){
        total += person.sales;
    }
    return total / arr.length;
}
//Write a function named convertNameToObject that accepts a string that contains a first name and last name separated by a space character, and returns an object with properties firstName and lastName.
function convertNameToObject(name){
    let splitName = name.split(" ");
    return{
        firstName: splitName[0],
        lastName: splitName[1]
    };
}
//Write a function named countVowels that accepts a string and returns the number of vowels in that string. (Don't worry about or count "y" as a vowel)
function countVowels(str){
    const vowels = ["a","e","i","o","u"];
    const splitString = str.toLowerCase().split("");
    let count = 0;
    for(let char of splitString){
        if(vowels.includes(char)){
            count++;
        }
    }
    return count;
}
// function countVowels(str) {
//     let count = 0;
//     let splitStr = str.split('');
//     for (let i = 0; i < splitStr.length; i++) {
//         if (isVowel(splitStr[i])) {
//             count++
//         }
//     }
//     return count
// }
//Write a function named analyzeWord. It should take in a string and return an object with information about the input word. The object returned should have the following properties:
//
// word: the original word that was passed into the function
// numberOfLetters: the number of letters in the word
// numberOfVowels: the number of vowels in the word
function analyzeWord(word){
    return{
        word: word,
        numberOfletters: word.length,
        numberOfVowels: countVowels(word)
    };
}
//Write a function named capitalizeName that accepts a string that is a first and last name separated by a space, and returns a string that that has the first and last names capitalized.
//
// For this problem, you may assume that the function will only ever be called with a string that has two words separated by a single space.
function capitalizeName(name){
    let splitName = name.split(" ");
    for(let i = 0; i < splitName.length; i++){
        splitName[i] = splitName[i].substring(0,1).toUpperCase() + splitName[i].substring(1).toLowerCase()
    }
    return splitName.join(" ");
}






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