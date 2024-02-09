/*
    Factorial Number 5 = 5*4*3*2*1 = ?
*/

function factorial(num) {
    let factorial = 1
    while (num > 0) {
        factorial = factorial * num;
        num--;
    }
    console.log(factorial);
}

factorial(5);