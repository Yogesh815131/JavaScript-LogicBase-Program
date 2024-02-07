/*
    **
   ****
  ******
 ********
**********
 ********
  ******
   ****
    **
*/

for (let rows = 0; rows < 9; rows++) {
    if (rows < 5) {
        for (let spaces = 0; spaces < 4 - rows; spaces++) {
            process.stdout.write(" ");
        }

        for (let stars = 0; stars < 2 * (rows + 1); stars++) {
            process.stdout.write("*");
        }
    } else {
        for (let spaces = 0; spaces <= rows - 5; spaces++) {
            process.stdout.write(" ");
        }

        for (let stars = 0; stars < 18 - 2 * rows; stars++) {
            process.stdout.write("*");
        }
    }
    
    console.log();
}
