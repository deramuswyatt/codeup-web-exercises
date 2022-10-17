//1-50 odd
//let wrong = (i % 2 !== 0);
//let userInput = parseFloat(prompt("Give me a odd number 1 - 50"));

// function onethroughFifty() {
//         for(i = 1; i <= 50; i++) {
//             if (userInput = i && wrong) {
//                 return ("Give me a odd number 1 - 50")
//                 // use the break keyword to exit from the while loop
//             }else {
//                 alert("Her is an odd number" + i);
//
//             }
//                break;
//                 if (i % 2 !== 0) {
//                     console.log(prompt("Give me a odd number 1 - 50"));
//                     // nothing after the break will get processed
//                 }
//
//         }
// }
//onethroughFifty()
// for (var i = 1; i < 100; i++) {
//
//     if (i % 2 !== 0) {
//         // number isn't even
//         // odd numbers aren't as cool
//         // skip the rest of the loop and continue with the next iteration
//         continue;
//     }
//
//     console.log('Here is a lovely even number: ' + i);
// }
// for(int i = 1; i < 50; i++)
// if(i % 2 != 0)
//     System.out.println(i);
let number = 0;
 while (number !== undefined){
     number = prompt("Please enter odd number 1 - 50");
     if(number % 2 !== 0 && number > 0 && number < 50) {
         break;
     }
     console.log(number);
 }
 for(let i = 1; i < 50; i++){
     if (i === parseFloat(number)){
         console.log("yikes! Skipping number: " + number);
         continue;
     }
     if (i % 2 === 0){
         continue;
     }
     console.log("here is an odd number: " + i);
}