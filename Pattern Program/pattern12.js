/*
         * 
        * * 
       * * * 
      * * * * 
     * * * * * 
    * * * * * * 
   * * * * * * * 
  * * * * * * * * 
 * * * * * * * * * 
* * * * * * * * * * 
 * * * * * * * * * 
  * * * * * * * * 
   * * * * * * * 
    * * * * * * 
     * * * * * 
      * * * * 
       * * * 
        * * 
         * 
*/

for (let rows = 0; rows < 19; rows++) {
    if (rows < 10) {
        for (let spaces = 0; spaces < 9 - rows; spaces++) {
            process.stdout.write(" ");
        }

        for (let stars = 0; stars <= rows; stars++) {
            process.stdout.write("* ");
        }
    } else {
        for (let spaces = 0; spaces <= rows - 10; spaces++) {
            process.stdout.write(" ");
        }

        for (let stars = 0; stars < 19 - rows; stars++) {
            process.stdout.write("* ");
        }
    }
    
    console.log();
}
