/*
    Number prime or not
*/

function primeNumber(num){
    let flag = false;
    if(num <= 1 ){
        flag = false
    }
    for(let i=1; i<=num/2; i++){
        if(num%i == 0){
            flag = false
        }
        else{
            flag = true
        }
    }
    return flag
}

let num = 28
if(primeNumber(num)){
    console.log(num, " Is a prime number");
}else{
    console.log(num, 'is a not prime number');
}


// console.log(Math.sqrt(225));
