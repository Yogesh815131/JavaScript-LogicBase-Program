/*
    A B C D E
    A B C D E
    A B C D E
    A B C D E
    A B C D E
*/

for(let i=1; i<=5; i++){
    let pattern = "";
    for(let j=1; j<=5; j++){
        pattern += String.fromCharCode(64+j)+" ";
    }
    console.log(pattern);
}