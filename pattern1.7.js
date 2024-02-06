/*
    E E E E E
    D D D D D
    C C C C C
    B B B B B
    A A A A A
*/

for(let i=5; i>=1; i--){
    let pattern = "";
    for(let j=1; j<=5; j++){
        pattern += String.fromCharCode(64+i)+" ";
    }
    console.log(pattern);
}