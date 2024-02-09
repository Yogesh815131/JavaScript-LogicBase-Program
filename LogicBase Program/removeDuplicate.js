
function removeDuplicate(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;

        for (let j = 0; j < newArr.length; j++) {
              if (arr[i] === arr[j]) {
                isDuplicate = true
                break;
              }        
        }
        if (!isDuplicate) {
            newArr.push(arr[i])
        }
    }
    return newArr;
}

let arr = [1, 32, 43, 2, 43, 5, 6, 7, 43, 4, 8, 9]
duplicateRemove = removeDuplicate(arr)

console.log(`Duplicate element array ${arr}`);
console.log(`remove Duplicate element array ${duplicateRemove}`);