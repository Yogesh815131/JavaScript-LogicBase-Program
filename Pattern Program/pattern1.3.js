/* 
    5 5 5 5 5
    4 4 4 4 4
    3 3 3 3 3
    2 2 2 2 2
    1 1 1 1 1

*/

for(let i= 5; i>=1; i--){
    let pattern='';
    for(let j=1; j<=5; j++){
        pattern += i;
    }
    console.log(pattern);
}