/*
    Number palindrome OR not
*/

function numPalindrome(num) {
    let orignalNumber = num;
    let result = 0;
    let digit;
    while (num != 0) {
        digit = num%10
        result =  result*10 + digit;
        num = Math.floor(num/10);
    }
    if (result == orignalNumber) {
        console.log(orignalNumber, " is palindrome");
    }
    else{
        console.log(orignalNumber, "is not palindrome");
    }
}

numPalindrome(512);
