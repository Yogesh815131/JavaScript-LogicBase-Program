/*
    find the addition of even number or addition of odd number
*/

function additionEvenOdd(arr) {
    let evenSum = 0;
    let oddSum = 0;
    for (let i = 0; i < arr.length; i++) {        
        if (arr[i] % 2 === 0) {
            evenSum += arr[i]; 
        }else{
            oddSum += arr[i] 
        }        
    }
    console.log("Even Number Sum Is ", evenSum);
    console.log("Odd Number Sum Is ", oddSum);
}

let arr = [18, 25, 34, 1, 34, 4, 3, 54, 66, 6, 7]
// let arr = [1, 2, 3, 4, 5, 6]
additionEvenOdd(arr)