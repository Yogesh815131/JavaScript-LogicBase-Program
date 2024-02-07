/*
*********
 *******
  *****
   ***
    *
*/

for (let rows = 0; rows < 5; rows++) {
    for (let spaces = 0; spaces < rows; spaces++) {
        process.stdout.write(" ");
    }

    for (let stars = 0; stars < 9 - 2 * rows; stars++) {
        process.stdout.write("*");
    }

    console.log();
}