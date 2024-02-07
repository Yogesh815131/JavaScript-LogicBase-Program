/*
        E 
      D D 
    C C C 
  B B B B 
A A A A A

*/

for (let row = 1; row <= 5; row++) {
    let spaces = "";
    for (let space = 1; space <= 5 - row; space++) {
        spaces += "  ";
    }
    let stars = "";
    for (let col = 1; col <= row; col++) {
        stars +=String.fromCharCode(70-row)+" ";
    }
    console.log(spaces + stars);
}