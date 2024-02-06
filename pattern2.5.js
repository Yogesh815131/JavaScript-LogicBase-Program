/**
    5
    4 4 
    3 3 3
    2 2 2 2
    1 1 1 1 1
 */
for(let i=5; i>=1; i--){
    let pattern ="";
    for(let j=0; j<=5-i; j++){
        pattern += i + " ";
    }
    console.log(pattern);
}