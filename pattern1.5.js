/*
    5 4 3 2 1
    5 4 3 2 1
    5 4 3 2 1
    5 4 3 2 1
    5 4 3 2 1
*/

for(let i=1; i<=5; i++){
    let pattern = ""; 
    for(let j=5; j>=1; j--){
        pattern += j+" ";
    }
    console.log(pattern);
}
