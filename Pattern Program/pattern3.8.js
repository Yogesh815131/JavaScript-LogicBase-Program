/*
        A 
      B B 
    C C C 
  D D D D 
E E E E E

*/

for (let row = 1; row <= 5; row++) {
    let spaces = "";
    for (let space = 1; space <= 5 - row; space++) {
        spaces += "  ";
    }
    let stars = "";
    for (let col = 1; col <= row; col++) {
        stars +=String.fromCharCode(64+row)+" ";
    }
    console.log(spaces + stars);
}