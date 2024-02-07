/*
        1 
      1 2 
    1 2 3 
  1 2 3 4 
1 2 3 4 5 

 */

for (let row = 0; row <= 5; row++) {
    let spaces = "";
    for (let space = 1; space <= 5 - row; space++) {
        spaces += "  ";
    }
    let stars = "";
    for (let col = 1; col <= row; col++) {
        stars += col+" ";
    }
    console.log(spaces + stars);
}