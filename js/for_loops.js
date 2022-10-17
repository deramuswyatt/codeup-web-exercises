
//
// while (i < 10){
//     console.log('while loop iteration ' +  i);
//     i++
// }
// //will never run
// var i = 10;
//
// while (i < 10) {
//     console.log('while loop iteration #' + i);
//     i++;
// }
//will run 1 time
// var i = 10;
//
// do {
//     console.log('while loop iteration # ' + i);
//     i++;
// } while (i < 10);

// for (let i = 0; i < 10; i++) {
//     console.log('for loop iteration #' + i);
// }

// var numberToStopAt = 5;
//
// for (var i = 1; i < 100; i++) {
//
//     console.log('Loop counter is: ' + i);
//
//     if (i === numberToStopAt) {
//         console.log('We have reached the stopping point: break!');
//         // use the break keyword to exit from the while loop
//         break;
//         // nothing after the break will get processed
//         console.log('You will never see this line.');
//     }
// }

function showMultiplicationTable(num){
    for( i = 1; i <= 10; i++){
        console.log(num + " x " + i + " = " + (num * i));
    }

}
showMultiplicationTable(7)


function numberPyramid() {
    var totalNumberofRows = 9;
    var output = '';
    for (var i = 1; i <= totalNumberofRows; i++) {
            for (var j = 1; j <= i; j++) {
                output += j + '';
            }

        console.log(output);
        output = '';
    }
}
numberPyramid();

for(let i = 1; i < 10; i++){

    let output = '';
    for(let j = 0; j < i; j++){

        output += i;
    }
    console.log(output)



//getRandomArbitrary for random numbers
function twenty() {
    for (var i = 1; i <= 10; i++) {
        let random = Math.floor(Math.random() * 180) + 20;
        if (random % 2 === 0) {
            console.log(random + ' is even');
        } else {
            console.log(random + ' is odd');
        }

    }
}
twenty()

//multiplication
let number = 7;
for (var i = 0; i <= 10; i++) {
    let answer = (number * i);
    console.log(number + ' x ' + i + ' = ' + answer);
}}

//100-5
for (var x = 100; x > 0; x-=5)
    console.log(x);


