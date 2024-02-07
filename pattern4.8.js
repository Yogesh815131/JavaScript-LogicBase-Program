/*
    A A A A A 
    B B B B 
    C C C 
    D D 
    E
*/

for(let i=1; i<=5; i++){
    let pattern = "";
    for(let j=1; j<=6-i; j++){
        pattern += String.fromCharCode(64+i)+" "
    }
    console.log(pattern);
}