/*

    * * * * * 
      * * * * 
        * * * 
          * * 
            *

*/

for (let row = 1; row <= 5; row++) {
    let spaces = "";
    for (let space = 0; space < row; space++) {
        spaces += "  ";
    }
    let stars = "";
    for (let col = 1; col <=6 - row; col++) {
        stars += "* ";
    }
    console.log(spaces + stars);
}