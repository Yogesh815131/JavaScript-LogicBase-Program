/*
    E D C B A 
    E D C B 
    E D C 
    E D 
    E
 */

for(let i=1; i<=5; i++){
    let pattern = "";
    for(let j=1; j<=6-i; j++){
        pattern += String.fromCharCode(70-j)+" "
    }
    console.log(pattern);
}