// Write a function that when passed an object will return the value of the object’s price property.
//     Ex. let obj = {name: “Potatoes”, quantity: 2, price: “$7.89"};
// getPrice(obj); // returns “$7.89”

let groceries = [
    {
        name: "apples",
        price: "$ " + .89,
    },
    {
        name: "oranges",
        price: "$" + 1.00
    },

]
console.log(groceries[0]);


// let price = .89
function getPrice(obj){
    return obj.price


}
let oranges ={
    name: "oranges",
    quantity: 2,
    price: "7.89"

}
console.log(getPrice(oranges));