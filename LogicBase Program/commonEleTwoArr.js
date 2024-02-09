/*
    Common Element two array
*/

function commonElement(arr1, arr2){
    let commonElement = []

    for (let i = 0; i< arr1.length; i++) {
        let isCommon = false
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                isCommon = true
            }
        }if (isCommon) {
            commonElement.push(arr1[i])
        }
       
    }
    return commonElement
}

let arr1 = [1, 2, 43, 5, 76];
let arr2 = [2, 4, 54, 1, 5, 7, 8, 76]

let commonEle = commonElement(arr1, arr2);

console.log(`Array 1 : ${arr1}`);
console.log(`Array 2 : ${arr2}`);
console.log(`Common Element two array : ${commonEle}`);