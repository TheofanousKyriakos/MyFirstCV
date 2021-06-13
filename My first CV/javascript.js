// var square = function (number){
//     return number * number
// };
// var x = square(4);
// console.log(x);

// var calculateSubtotal = function (price,quantity) {
// return price * quantity;
// };
// var result = calculateSubtotal(10,2);
// console.log (result);

// var askisi = function calculateTotal(price,quantity) {
// var subtotal = price * quantity;
// return subtotal + calculateTax(subtotal);
// // this function is nested
// function calculateTax(subtotal) {
// var taxRate = 0.05;
// var tax = subtotal * taxRate;
// return tax;
// } }
// var result =
// console.log (askisi(30,2));

// function addSquares(a, b) {
// function square(x) {
// return x * x;
// }
// return square(a) + square(b);
// }
// console.log (addSquares(2,3));

// var someObject = {
//   myProperty: "Foo",
//   myMethod: function (prefix, postfix) {
//     alert(prefix + this.myProperty + postfix);
//   },
// };
// someObject.myMethod("<", ">"); // alerts '<Foo>'
// var someOtherObject = {
//   myProperty: "Bar",
// };
// someObject.myMethod.call(someOtherObject, "<", ">"); // alerts '<Bar>'
// someObject.myMethod.apply(someOtherObject, ["<", ">"]); // alerts '<Bar>'

// function pow(x, n) {
// let result = x;
// for (let i = 1; i < n; i++) {
// result *= x;
// }
// return result;
// }
// let x = prompt("x?", '');
// let n = prompt("n?", '');
// if (n < 1) {
// alert(`Power ${n} is not supported, use a positive integer`);
// } else {
// alert( pow(x, n) );
// }

// function greeting(name) {
//   alert("Hello " + name);
// }
// function processUserInput(callback) {
//   var name = prompt("Please enter your name.");
//   callback(name);
// }
// processUserInput(greeting);

