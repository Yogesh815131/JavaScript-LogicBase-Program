/*

        E 
      E D 
    E D C 
  E D C B 
E D C B A 

*/

for (let row = 1; row <= 5; row++) {
    let spaces = "";
    for (let space = 1; space <= 5 - row; space++) {
        spaces += "  ";
    }
    let stars = "";
    for (let col = 1; col <= row; col++) {
        stars +=String.fromCharCode(70-col)+" ";
    }
    console.log(spaces + stars);
}