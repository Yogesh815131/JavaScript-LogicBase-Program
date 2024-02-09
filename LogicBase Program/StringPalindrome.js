/*
    String palindrome Or Not
*/

function palindrome(str) {
    let orignalString = str
    let reverseStr ="";
    for(let i=0; i<str.length; i++){    
        reverseStr = str.charAt(i) + reverseStr;
    }
    if (orignalString == reverseStr) {
        console.log("'"+orignalString+"'", "String is palindrome");
    }else{
        console.log("'"+orignalString+"'", "String is not palindrome");
    }
}
palindrome("yogesh")