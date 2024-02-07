/*
  E E E E E 
    D D D D 
      C C C 
        B B 
          A 
*/

for (let row = 1; row <= 5; row++) {
    let spaces = "";
    for (let space = 0; space < row; space++) {
        spaces += "  ";
    }
    let stars = "";
    for (let col = 1; col <=6 - row; col++) {
        stars +=String.fromCharCode(70-row)+" ";
    }
    console.log(spaces + stars);
}