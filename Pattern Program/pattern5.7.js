/*
  E D C B A 
    E D C B 
      E D C 
        E D 
          E 
*/

for (let row = 1; row <= 5; row++) {
    let spaces = "";
    for (let space = 0; space < row; space++) {
        spaces += "  ";
    }
    let stars = "";
    for (let col = 1; col <=6 - row; col++) {
        stars +=String.fromCharCode(70-col)+" ";
    }
    console.log(spaces + stars);
}