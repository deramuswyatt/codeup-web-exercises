// const hamsters = [
//     {
//         name: "Hamtaro",
//         heightInMM: 86,
//         fur: ['orange', 'white'],
//         gender: "male",
//         dateOfBirth: "August 6"
//     } , {
//         name: "Bijou",
//         heightInMM: 75,
//         fur: ['white'],
//         gender: "female",
//         dateOfBirth: "July 10"
//     } , {
//         name: "Oxnard",
//         heightInMM: 100,
//         fur: ['grey', 'white'],
//         gender: "male",
//         dateOfBirth: "May 3"
//     } , {
//         name: "Boss",
//         heightInMM: 120,
//         fur: ['brown', 'white'],
//         gender: "male",
//         dateOfBirth: "September 21"
//     } , {
//         name: "Snoozer",
//         heightInMM: 85,
//         fur: ['brown', 'white', "pink"],
//         gender: "male",
//         dateOfBirth: "January 14"
//     }
// ];
//
// // .map will change every element of the array, and return a new array of the same length
//
// // const[];
// // for(let hamseter of hamsters) {
// //     name.push()
// // }
//
// const names = hamsters.map(hamster => hamster.name);
//
// console.log(names);
//
// const numbers = [1,2,3,4,5]
//
// const doubleNumbers = numbers.map(num => num * 2);
// console.log(doubleNumbers);
//
// const evenNumbers = numbers.filter(num => num % 2 === 0) //return for the inner function MUST BE a boolean value
// const evenDoubleNumbers = doubleNumbers.filter(num => num % 2 ===0);
// console.log(doubleNumbers);
// console.log(evenNumbers);
// // const findEvenNumber = doubleNumbers.filter(evenNumbers);
// // console.log(findEvenNumber);
//
// const tallHamsters = hamsters.filter(hamster => hamster.heightInMM >= 100).map(hamster => hamster.name);
//
// console.log(tallHamsters);
//
//
// //.reduce() - changes an array into a single value...something. 2arguements 1st is a function expression with two parameters(accumulation, elementaTOI) 2nd is the starting value of the accumulation/result
//
// let sumInBeforeTimes = 0
// for(let number of numbers){
//     sumInBeforeTimes += number
// }
// console.log(sumInBeforeTimes);
//
// const sum = numbers.reduce((accumulation, currentNumber) => {
//     return accumulation + currentNumber
// }, 0);
// console.log(sum);
//
// const tallestHamster = hamsters.reduce((tallestHamster, hamster) => {
//  if (hamster.heightInMM > tallestHamster.heightInMM)  {
//      tallestHamster = hamster;
//  }
// }

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//Gets users with three languages
const threeLanguages = users.filter(user => user.languages.length >= 3);
console.log(threeLanguages);

const email = users.map(user => user.email)
console.log(email);

const years = users.reduce((total, user) => {
    return total + user.yearsOfExperience;
}, 0);
const average = years / users.length;
console.log(average);

const longestEmail = users.reduce((longest, user) => {
    if(user.email.length > longest.length)
        return user.email;
    else{
        return longest;
    }
}, "");
console.log(longestEmail);

const instructorRoleCall = users.reduce((finalStr, user, index) => {
    if (index === users.length - 1) {
        return finalStr + `and $ (user.name).`;
    }else{
        return finalStr + `$(user.name),`;
    }
});

let uniqueLanguages = users.reduce((lang, user) => {
    if (lang.length === 0){
        user.languages.forEach(type => {
            lang.push(type);
        })
    }
    else {
        user.languages.forEach(type => {
            if(!lang.includes(type)){
                lang.push(type);
            }
        })
    }
    return lang;
}, []);
console.log(uniqueLanguages);