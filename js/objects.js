(function (){

/**
 * TODO:
 * Create an object with firstName and lastName properties that are strings
 * with your first and last name. Store this object in a variable named
 * `person`.
 *
 * Example:
 *  > console.log(person.firstName) // "Rick"
 *  > console.log(person.lastName) // "Sanchez"
 */

let person = {
    firstName: "Wyatt ",
    lastName: "DeRamus ",
    sayHello: function(){
        return "Hello from " + person.firstName + " " + person.lastName;
    }
};
    console.log(person.firstName);
    console.log(person.lastName);
    console.log(person.sayHello);
/**
 * TODO:
 * Add a sayHello method to the person object that returns a greeting using
 * the firstName and lastName properties.
 * console.log the returned message to check your work
 *
 * Example
 * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
 */
console.log(person.sayHello());

// let sayHello = (person.firstName + person.lastName);
// console.log("Hello from " + sayHello + "!");

/** TODO:
 * HEB has an offer for the shoppers that buy products amounting to
 * more than $200. If a shopper spends more than $200, they get a 12%
 * discount. Write a JS program, using conditionals, that logs to the
 * browser, how much Ryan, Cameron and George need to pay. We know that
 * Cameron bought $180, Ryan $250 and George $320. Your program will have to
 * display a line with the name of the person, the amount before the
 * discount, the discount, if any, and the amount after the discount.
 *
 * Uncomment the lines below to create an array of objects where each object
 * represents one shopper. Use a foreach loop to iterate through the array,
 * and console.log the relevant messages for each person
 */



let shoppers = [
    {
        name: 'Cameron',
        amount: 180},


    {
        name: 'Ryan',
        amount: 250},

    {
        name: 'George',
        amount: 320
    },
    ]

    shoppers.forEach(function(shopper) {
        console.log("Shopper: " + shopper.name);
        console.log("Amount before discount " + shopper.amount);
        console.log("Amount after discount ")
        if(shopper.amount > 200)
        {
            console.log("Amount of discount is 12%");
            shopper.amount = shopper.amount- (shopper.amount * .12);
            console.log("Amount after discount " + shopper.amount);
        }else
        {
            return("Your total is $" + shopper.amount + "You do not get a discount");
        }

    });
console.log (shoppers[1].amount);





/** TODO:
 * Create an array of objects that represent books and store it in a
 * variable named `books`. Each object should have a title and an author
 * property. The author property should be an object with properties
 * `firstName` and `lastName`. Be creative and add at least 5 books to the
 * array
 *
 * Example:
 * > console.log(books[0].title) // "The Salmon of Doubt"
 * > console.log(books[0].author.firstName) // "Douglas"
 * > console.log(books[0].author.lastName) // "Adams"
 */
let books = [
    {
            title: "The Salmon of Doubt",
            author: {
                firstName: "Douglas",
                lastName: "Adams",
            }
    },
    {
        title: "The Bernstein Bears",
        author: {
            firstName: "Robert",
            lastName: "Allen",
        }
    },
    {
        title: "Over the River",
        author: {
            firstName: "Delta",
            lastName: "AirBorne",
        }
    },
    {
        title: "Black Eagle Up",
        author: {
            firstName: "Big Fella",
            lastName: "Fella Big",
        }
    },
    {
        title: "The Monster Inside",
        author: {
            firstName: "Tyler",
            lastName: "Perry"
        }
    },

];
console.log(books[0].title);
console.log(books[3].author.firstName);
console.log(books[4].author.lastName);



/**
 * TODO:
 * Loop through the books array and output the following information about
 * each book:
 * - the book number (use the index of the book in the array)
 * - the book title
 * - author's full name (first name + last name)
 *
 * Example Console Output:
 *
 *      Book # 1
 *      Title: The Salmon of Doubt
 *      Author: Douglas Adams
 *      ---
 *      Book # 2
 *      Title: Walkaway
 *      Author: Cory Doctorow
 *      ---
 *      Book # 3
 *      Title: A Brief History of Time
 *      Author: Stephen Hawking
 *      ---
 *      ...
 */

books.forEach(function(book) {


console.log("Book # " + (books.indexOf(book) + 1))
// console.log("Book # " + (index + 1));
    console.log("Title: " + book.title);
    console.log("Author: " + book.author.firstName + " " + book.author.lastName);
console.log(books[2]);
console.log(books[3]);
console.log(books[4]);
});
/**
 * Bonus:
 * - Create a function named `createBook` that accepts a title and author
 *   name and returns a book object with the properties described
 *   previously. Refactor your code that creates the books array to instead
 *   use your function.
 * - Create a function named `showBookInfo` that accepts a book object and
 *   outputs the information described above. Refactor your loop to use your
 *   `showBookInfo` function.
 */
// function createBook(){
//     let books1 = [
//         {
//             title: "The Codeup Crew",
//             author: {
//                 firstName: "wyatt",
//                 lastName: "DeRamus"
//             }
//         },
//     {
//             title: "Forever and a Day",
//             author:{
//             firstName: "DeRamus",
//             lastName: "Wyatt"
//     }
//         },
// ]
//
// // }
// books1.forEach(function(book) {
//
// })
//
// console.log(books1[0]);
// function showBookInfo(){
//
// }
})();