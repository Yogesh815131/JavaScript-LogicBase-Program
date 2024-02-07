/**
          * 
        * * 
      * * * 
    * * * * 
  * * * * * 
  
 */

for (let row = 0; row < 5; row++) {
    let spaces = "";
    for (let space = 0; space < 5 - row; space++) {
        spaces += "  ";
    }
    let stars = "";
    for (let col = 0; col <= row; col++) {
        stars += "* ";
    }
    console.log(spaces + stars);
}