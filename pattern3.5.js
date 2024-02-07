/*
            5 
      4 4 
    3 3 3 
  2 2 2 2 
1 1 1 1 1

*/

for (let row = 1; row <= 5; row++) {
    let spaces = "";
    for (let space = 1; space <= 5 - row; space++) {
        spaces += "  ";
    }
    let stars = "";
    for (let col = 1; col <= row; col++) {
        stars += 6 - row+" ";
    }
    console.log(spaces + stars);
}