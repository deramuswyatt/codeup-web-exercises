"use strict";
(function(){
// /* ########################################################################## */
//
// /**
//  * TODO:
//  * Create a function named `analyzeColor` that accepts a string that is a color
//  * name as input. This function should return a message which relates to the
//  * color stated in the argument of the function. For colors you do not have
//  * responses written for, return a string stating so
//  *f
//  * Example:
//  *  > analyzeColor('blue') // returns "blue is the color of the sky"
//  *  > analyzeColor('red') // returns "Strawberries are red"
//  *
//  *
//  *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
//  *
//  * You should use an if-else-if-else block to return different messages.
//  *
//  * Test your function by passing various string literals to it and
//  * console.logging the function's return value
//  */
//

function analyzeColor(color) {
    // var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    if (color === 'red') {
        return color + " is the color of hot sauce!";

    } else if (color === 'orange') {
           return color + " is the color of a particular fruit.";

        }else if (color === 'yellow')
        {
            return color + " is the color of the sun.";

        }else if(color === 'green')
        {
            return color + " is the color of tree leaves.";

        }else if (color === 'blue')
        {
            return color + " is the color of the sky.";

        }else if (color === 'indigo')
        {
            return color + " is a mixture between blue and purple.";

        }else if (color === 'violet')
        {
            return color + " s a shade of purple.";

        }else {
        return color + " is not a color.";
    }
    }
    console.log(analyzeColor('orange'));
    console.log(analyzeColor("red"));


//
//
// // Don't change the next two lines!
// // These lines create two variables for you:
// // - `colors`: a list of the colors of the rainbow
// // - `randomColor`: contains a single random color value from the list (this
// //                  will contain a different color every time the page loads)
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];


// /**
//  * TODO:
//  * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
//  * You should see a different message every time you refresh the page
//  */
console.log(analyzeColor(randomColor));
// /**
//  * TODO:
//  * Comment out the code above, and refactor your function to use a switch-case statement
//  */

    /**
     * TODO:
     * Prompt the user for a color when the page loads, and pass the input from the
     * user to your `analyzeColor` function. Alert the return value from your
     * function to show it to the user.
     */
    let userInput2 = prompt('Give me a color?');
    alert(analyzeColor(userInput2));
    /* ########################################################################## */


function analyzeColor(color) {
    switch (color) {
        case 'red':
            return color + " is the color of hot sauce!";

        case "orange":
            return color + ' is the color of a particular fruit.';

        case "yellow":
            return color + " is the color of the sun.";

        case "green":
            return color + " is the color of tree leaves.";
        case "blue":
            return color + " is the color of the sky.";

        case "indigo":
            return color + " is a mixture between blue and purple.";

        case "violet":
            return color + " is a shade of purple.";

        default:
            return color + " this is not a color";

    }
}


    /**
     * TODO:
     * Suppose there's a promotion in Walmart, each customer is given a randomly
     * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
     * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
     * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
     * everything for free!.
     *
     * Write a function named `calculateTotal` which accepts a lucky number and total
     * amount, and returns the discounted price.
     *
     * Example:
     * calculateTotal(0, 100) // returns 100
     * calculateTotal(4, 100) // returns 50
     * calculateTotal(5, 100) // returns 0
     *
     * Test your function by passing it various values and checking for the expected
     * return value.
     */

    function calculateTotal(luckyNumber, total) {
        let discountedTotal;
        if (luckyNumber === 0) {
            alert(luckyNumber + " Sorry you didn't receive a discount.");
            discountedTotal = total;

        } else if (luckyNumber === 1) {
            alert(luckyNumber + " You'll receive a 10% discount.");
            discountedTotal = total - (total * 0.1);
        } else if (luckyNumber === 2) {
            alert(luckyNumber + " You'll receive a 25% discount.");
            discountedTotal = total - (total * 0.25);

        } else if (luckyNumber === 3) {
            alert(luckyNumber + " You'll receive a 35% discount.");
            discountedTotal = total - (total * 0.35);

        } else if (luckyNumber === 4) {
            alert(luckyNumber + " You'll receive a 50% discount.");
            discountedTotal = total - (total * 0.50);

        } else if (luckyNumber === 5) {
            alert(luckyNumber + " Everything is free.");
            discountedTotal = 0;
        }
        return discountedTotal;
    }

    console.log(calculateTotal(4, 100));
    console.log(calculateTotal(0, 100));

// /**
//  * TODO:
//  * Uncomment the line below to generate a random number between 0 and 5.
//  * (In this line of code, 0 is inclusive, and 6 is exclusive)
//  * Prompt the user for their total bill, then use your `calculateTotal` function
//  * and alerts to display to the user what their lucky number was, what their
//  * price before the discount was, and what their price after the discount is.
//  */
// //Generate a random number between 0 and 6
    var luckyNumber = Math.floor(Math.random() * 6);

    let userInput = prompt("What is your total bill? ");
    alert("Your lucky number was " + luckyNumber + '.' + ' Your price before discount is ' + userInput + '.' + ' Your discount price is ' + calculateTotal(luckyNumber, userInput) + '.');

    /**
     * TODO:
     * Write some JavaScript that uses a `confirm` dialog to ask the user if they
     * would like to enter a number. If they click 'Ok', prompt the user for a
     * number, then use 3 separate alerts to tell the user:
     *
     * - whether the number is even or odd
     * - what the number plus 100 is
     * - if the number is negative or positive
     *
     * Do *NOT* display any of the above information
     * if the user enters a value that is not of the number data type.
     * Instead, use an alert to inform them of the incorrect input data type.
     *
     *
     * Can you refactor your code to use functions?
     * HINT: The way we prompt for a value could be improved
     */

    if (confirm(" Would you like to enter a number?")) {
        let isNumber = parseFloat(prompt("Enter a number."));
            if (!isNaN(isNumber)) {

            } else {
                alert(' This is not a number')
            }
                if (isNumber % 2 === 0) {
                    alert(" The number " + isNumber + " is even.");
                } else {
                    alert(" The number " + isNumber + " is odd.");
                }

                alert("Your number + 100 is " + (isNumber + 100) + '.');

                if (isNumber >= 0) {
                    alert('Number is Positive.')
                } else {
                    alert("Number is Negative.")

                }





    }




   })();


