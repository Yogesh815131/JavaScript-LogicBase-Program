

for (let row = 0; row < 10; row++) {
    let spaces = "";
    for (let space = 0; space < 9 - row; space++) {
        spaces += " ";
    }
    let stars = "";
    for (let col = 0; col <= row; col++) {
        stars += "* ";
    }
    console.log(spaces + stars);
}