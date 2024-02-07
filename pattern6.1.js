
/*
    * 
    * * 
    * * * 
    * * * * 
    * * * * * 
    * * * * 
    * * * 
    * * 
    * 
*/

for(let row=1; row<=10; row++){
    if(row<=5){
        let pattern ="";
        for(let col=1; col<=row; col++){
            pattern += "* ";
        }
        console.log(pattern);
    }
    else{
        let pattern ="";
        for(let col=0; col<10-row ; col++){
            pattern += "* "
        }
        console.log(pattern);
    }
}