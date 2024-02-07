/*
  5 5 5 5 5 
    4 4 4 4 
      3 3 3 
        2 2 
          1 
*/

for (let row = 1; row <= 5; row++) {
    let spaces = "";
    for (let space = 0; space < row; space++) {
        spaces += "  ";
    }
    let stars = "";
    for (let col = 1; col <=6 - row; col++) {
        stars +=6-row+" ";
    }
    console.log(spaces + stars);
}