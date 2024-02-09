/*
    Duck number is a number that has at least one 0 , where leading 0’s are not countable.
*/

function duckNumber(num){
    let orignalNumber = num
    flag = false;
    while (num != 0) {
        if(num%10 == 0){
            flag = true
        }
        num = Math.floor(num/10);
    }

    if(flag == true){
        console.log(orignalNumber, "Number is Duck...");
    }else{
        console.log(orignalNumber, "Number is Not Duck...");
    }
}

duckNumber(2350)