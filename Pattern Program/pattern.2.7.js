/**
    E
    E D
    E D C
    E D C B
    E D C B A
 */

    for(let i=1; i<=5; i++){
        let pattern = "";
        for(let j=1; j<=i; j++){
            pattern += String.fromCharCode(70-j)+" ";
        }
        console.log(pattern);
    }