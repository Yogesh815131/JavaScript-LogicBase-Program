/*
    find the sum of the digits which are available in the number?
    Input : 256
    Output: 2+5+6 = 13
*/

function sumDigit(num){
    let sum = 0;
    let digit
    while (num != 0) {
        digit = num%10;
        sum = sum + digit
        num = Math.floor(num/10)
    }

    console.log(sum);
}

sumDigit(2657)