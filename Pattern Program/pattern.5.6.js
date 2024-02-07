/*
  A B C D E 
    A B C D 
      A B C 
        A B 
          A
*/

for (let row = 1; row <= 5; row++) {
    let spaces = "";
    for (let space = 0; space < row; space++) {
        spaces += "  ";
    }
    let stars = "";
    for (let col = 1; col <=6 - row; col++) {
        stars +=String.fromCharCode(64+col)+" ";
    }
    console.log(spaces + stars);
}