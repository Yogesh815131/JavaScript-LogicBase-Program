
function findLargestNumber(arr) {
    if (arr === 0) {
        return undefined;
    }

    let largestNumber = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largestNumber) {
            largestNumber = arr[i]
        }
    }
    return largestNumber
} 

let arr = [12, 43, 547, 1, 43, 65, 87, 98, 5];
let largestNumber = findLargestNumber(arr)

if (largestNumber != undefined) {
    console.log(` The Lasegest Number in the array ${largestNumber}`);
}else{
    console.log("array is empty");
}