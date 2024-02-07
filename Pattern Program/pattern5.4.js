/*
  1 1 1 1 1 
    2 2 2 2 
      3 3 3 
        4 4 
          5
*/

for (let row = 1; row <= 5; row++) {
    let spaces = "";
    for (let space = 0; space < row; space++) {
        spaces += "  ";
    }
    let stars = "";
    for (let col = 1; col <=6 - row; col++) {
        stars +=row+" ";
    }
    console.log(spaces + stars);
}