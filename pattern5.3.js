/*
  5 4 3 2 1 
    5 4 3 2 
      5 4 3 
        5 4 
          5
*/

for (let row = 1; row <= 5; row++) {
    let spaces = "";
    for (let space = 0; space < row; space++) {
        spaces += "  ";
    }
    let stars = "";
    for (let col = 1; col <=6 - row; col++) {
        stars +=6-col+" ";
    }
    console.log(spaces + stars);
}