/*
    5
    5 4
    5 4 3
    5 4 3 2
    5 4 3 2 1
*/

for(let i=1; i<=5; i++){
    let pattern ="";
    for(let j=5; j>=5-i; j--){
        pattern += j +" ";
    }
    console.log(pattern);
}