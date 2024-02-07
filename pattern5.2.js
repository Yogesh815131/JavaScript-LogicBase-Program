/*
  1 2 3 4 5 
    1 2 3 4 
      1 2 3 
        1 2 
          1 
*/

for (let row = 1; row <= 5; row++) {
    let spaces = "";
    for (let space = 0; space < row; space++) {
        spaces += "  ";
    }
    let stars = "";
    for (let col = 1; col <=6 - row; col++) {
        stars += col+" ";
    }
    console.log(spaces + stars);
}