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

for (let row = 0; row < 19; row++) {
    if (row < 10) {        
        for (let spaces = 0; spaces < 9 - row; spaces++) {
            process.stdout.write("  ");
        }

        
        for (let stars = 0; stars <= row; stars++) {
            process.stdout.write("* ");

        }
    }else {
        for (let spaces = 0; spaces <= row - 10; spaces++) {
            process.stdout.write("  ");
        }

        for (let stars = 0; stars < 19 - row; stars++) {
            process.stdout.write("* ");
        }
    }
    console.log();
}
