/**
    A B C D E 
    A B C D 
    A B C 
    A B 
    A
 */

for(let i=1; i<=5; i++){
    let pattern = "";
    for(let j=1; j<=6-i; j++){
        pattern += String.fromCharCode(64+j)+" "
    }
    console.log(pattern);
}