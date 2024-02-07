/*
    5 4 3 2 1 
    5 4 3 2 
    5 4 3 
    5 4 
    5
*/

for(let i=1; i<=5; i++){
    let pattern = "";
    for(let j=1; j<=6-i; j++){
        pattern += 6-j+" "
    }
    console.log(pattern);
}