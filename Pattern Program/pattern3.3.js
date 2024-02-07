/*
        5 
      5 4 
    5 4 3 
  5 4 3 2 
5 4 3 2 1 

*/

for (let row = 0; row <= 5; row++) {
    let spaces = "";
    for (let space = 1; space <= 5 - row; space++) {
        spaces += "  ";
    }
    let stars = "";
    for (let col = 1; col <= row; col++) {
        stars += 6-col+" ";
    }
    console.log(spaces + stars);
}