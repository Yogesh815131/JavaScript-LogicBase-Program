
let reverseStr = "";

function reverseString(str){
    for(let i=0; i<str.length; i++){    
        reverseStr = str.charAt(i) + reverseStr;
    }
    return reverseStr;
}

console.log(reverseString("hello"));