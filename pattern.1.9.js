/*
    E D C B A
    E D C B A
    E D C B A
    E D C B A
    E D C B A
*/

for(let i=1; i<=5; i++){
    let pattern ="";
    for(let j=5; j>=1; j--){
        pattern += String.fromCharCode(64+j)+" ";
    }
    console.log(pattern);
}