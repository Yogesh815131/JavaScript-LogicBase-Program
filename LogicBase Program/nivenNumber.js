/*
    Niven Number: sum of all digits is divisible to the original number.
                  A Number is divisible by the sum of all digits in that number.

    num = 20  = 2+0 = 2 >>> 20%2 == 0; niven number
*/

function nivenNumber(num){
    let orignalNumber = num;
    let digitSum = 0;

    while (num != 0) {
        digitSum = digitSum + num%10;
        num = Math.floor(num/10);
    }
    if (orignalNumber%digitSum == 0) {
        console.log(orignalNumber, "Is a Niven Number");
    }else{
        console.log(orignalNumber, "Is a not Niven Number");
    }
}

nivenNumber(735);