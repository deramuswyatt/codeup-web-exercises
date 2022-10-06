"use strict";

console.log('Hello from external JavaScript!');

alert("Welcome to my website.");

let userInput = prompt('What is your favorite color?');
console.log('The user entered: ' + userInput);

alert("Great, " + userInput + " is my favorite color too!");


//1st bullet//
let price = 3;

let littleMermaid = prompt(`How many days will you have The Little Mermaid?`);
let brotherBear = prompt(`How many days will you have Brother Bear?`);
let hercules = prompt(`How many days will you have Hercules?`);

let total = (Number(littleMermaid)+ Number(brotherBear) + Number(hercules)) * price;


 alert(`Your total price is: $" ${total}`);

 //2nd bullet//
let googleP = prompt( 'what was your pay per hour at Google?');
let googleH = prompt( 'How many hours did you work?');
let facebookP = prompt( 'What was was your pay per hour at Facebook?');
let facebookH = prompt( 'How many hours did you work?');
let amazonP = prompt( 'What was was your pay per hour at Amazon?');
let amazonH = prompt( 'How many hours did you work?');

let totalA = (Number(amazonP) * (Number(amazonH)));
let totalG = (Number(googleP) * (Number(googleH)));
let totalF = (Number(facebookP) * (Number(facebookH)));


let totalZ = (Number(totalG)+ Number(totalF)+ Number(totalA));

alert("Your total payment is: $" + totalZ)

//3rd bullet//

let confirmed = confirm('Is your class schedule full?');
console.log(confirmed); // will be either true or false

var confirmedC= confirm('Does it conflict with your class schedule?');
console.log(confirmedC); // will be either true or false

alert = ("Great, you can join this class.");

//4th bullet//
let  confirmedD = confirm('Are you a premium member with an unexpired offer?');
console.log(confirmedD); // will be either true or false

alert("Great, you qualify.");

let  confirmedE = confirm('Are you buying more than two items and the offer has not expired?');
console.log(confirmedE); // will be either true or false

























