/*
    1 2 3 4 5 
    1 2 3 4 
    1 2 3 
    1 2 
    1
*/

for(let i=1; i<=5; i++){
    let pattern = "";
    for(let j=1; j<=6-i; j++){
        pattern += j+" "
    }
    console.log(pattern);
}