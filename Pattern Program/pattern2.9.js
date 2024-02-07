/**
    E
    D D
    C C C 
    B B B B
    A A A A A
 */

    for(let i=0; i<=5; i++){
        let pattern ="";
        for(let j=1; j<=i; j++){
            pattern += String.fromCharCode(70-i)+" ";
        }
        console.log(pattern);
    }