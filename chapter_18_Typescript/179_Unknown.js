"use strict";
let unknown = "hello";
if (typeof unknown === "string") {
    console.log("Hi");
}
let message = "Hello";
let username;
let userId;
// Function annotations
function greet(name) {
    return `Hello, ${name}!`;
}
// Arrow function annotations
const multiply = (a, b) => a * b;
// Object annotations
let user = {
    name: "John",
    age: 30
};
console.log(greet("Alice"));
console.log(multiply(5, 10));
console.log(user);
console.log(unknown);
