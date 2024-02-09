/*
    Write a program to take a number as dynamic input and find
     the sum of the digits which are available in the number?
*/

// let num = parseInt(prompt("Number:")); --> work only browser
let num = 1234;

let sumResult = 0;

while(num != 0){
    sumResult = sumResult + num%10;
    num = Math.floor(num/10);
}
console.log(sumResult);