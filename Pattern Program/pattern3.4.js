/*
            1 
      2 2 
    3 3 3 
  4 4 4 4 
5 5 5 5 5 

*/

for (let row = 1; row <= 5; row++) {
    let spaces = "";
    for (let space = 1; space <= 5 - row; space++) {
        spaces += "  ";
    }
    let stars = "";
    for (let col = 1; col <= row; col++) {
        stars += row+" ";
    }
    console.log(spaces + stars);
}