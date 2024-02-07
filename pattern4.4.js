/*
    1 1 1 1 1 
    2 2 2 2 
    3 3 3 
    4 4 
    5
    
*/

for(let i=1; i<=5; i++){
    let pattern = "";
    for(let j=1; j<=6-i; j++){
        pattern += i+" "
    }
    console.log(pattern);
}