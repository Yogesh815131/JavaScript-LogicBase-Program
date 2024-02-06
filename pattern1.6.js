/*
    A A A A A
    B B B B B
    C C C C C
    D D D D D
    E E E E E
*/

for(let i=1; i<=5; i++){
    let pattern = ""
    for(let j=1; j<=5; j++){
        pattern += String.fromCharCode(64+i)+" ";
    }
    console.log(pattern);
}

