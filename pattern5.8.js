/*
  A A A A A 
    B B B B 
      C C C 
        D D 
          E
*/

for (let row = 1; row <= 5; row++) {
    let spaces = "";
    for (let space = 0; space < row; space++) {
        spaces += "  ";
    }
    let stars = "";
    for (let col = 1; col <=6 - row; col++) {
        stars +=String.fromCharCode(64+row)+" ";
    }
    console.log(spaces + stars);
}