/*
    A 
    B B 
    C C C 
    D D D D
    E E E E E
*/

for(let i=0; i<=5; i++){
    let pattern ="";
    for(let j=1; j<=i; j++){
        pattern += String.fromCharCode(64+i)+" ";
    }
    console.log(pattern);
}