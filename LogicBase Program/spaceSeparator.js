/*
    display all the digits of that number with a space separator?
*/

function spaceSeparator(num){
    let result = "";
    let digit;
    while (num != 0) {
        digit = num%10;
        result = digit+"  "+result
        num = Math.floor(num/10);
    }
    console.log(result);
}

spaceSeparator(125436)