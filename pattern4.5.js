/*
    5 5 5 5 5 
    4 4 4 4 
    3 3 3 
    2 2 
    1
*/

for(let i=1; i<=5; i++){
    let pattern = "";
    for(let j=1; j<=6-i; j++){
        pattern += 6-i+" "
    }
    console.log(pattern);
}