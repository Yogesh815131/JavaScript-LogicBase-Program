/*

        A 
      A B 
    A B C 
  A B C D 
A B C D E

*/
for (let row = 1; row <= 5; row++) {
    let spaces = "";
    for (let space = 1; space <= 5 - row; space++) {
        spaces += "  ";
    }
    let stars = "";
    for (let col = 1; col <= row; col++) {
        stars +=String.fromCharCode(64 + col )+" ";
    }
    console.log(spaces + stars);
}