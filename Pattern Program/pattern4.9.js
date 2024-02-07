/*
    E E E E E 
    D D D D 
    C C C 
    B B 
    A
*/

for(let i=1; i<=5; i++){
    let pattern = "";
    for(let j=1; j<=6-i; j++){
        pattern += String.fromCharCode(70-i)+" "
    }
    console.log(pattern);
}