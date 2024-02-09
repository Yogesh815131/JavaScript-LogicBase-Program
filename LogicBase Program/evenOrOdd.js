/*
     Write a program to take a number as dynamic input and check 
     whether the number is an even number or odd number?
*/


// Use the prompt function to take user input
// let num = parseInt(prompt("Number:")); --> work only browser
let num = 12

if (num % 2 === 0) {
    console.log(num + " is Even Number");
} else {
    console.log(num + " is Odd Number");
}
