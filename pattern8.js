

for (let row = 1; row <= 10; row++) {
    if (row <= 5) {
        let spaces = "";
        for (let space = 1; space <= 5 - row; space++) {
            spaces += " ";
        }
        let pattern = "";
        for (let col = 1; col <= row; col++) {
            pattern += "* ";
        }
        console.log(spaces + pattern);
    } else {
        let spaces = "";
        for (let space = 1; space <= row - 5; space++) {
            spaces += " ";
        }
        let pattern = "";
        for (let col = 1; col <= 10 - row + 1; col++) {
            pattern += "* ";
        }
        console.log(spaces + pattern);
    }
}


//         * 
//       * * 
//     * * * 
//   * * * * 
// * * * * * 
//   * * * *
//     * * *
//       * *
//         *