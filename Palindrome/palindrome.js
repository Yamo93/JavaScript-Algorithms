function isPalindrome(str) {
    // the \W is to remove all non-alphanumeric characters, and the \s is to remove all whitespace (which is not needed since \W covers it)
    let newStr = str.toLowerCase().replace(/[\W_]/g, "");
    let reversedStr = newStr.split("").reverse().join("");
    return newStr === reversedStr;
    // if (newStr === reversedStr) {
    //     return true;
    // } return false;
}

console.log(isPalindrome('A man, a plan, a canal. Panama'));
console.log(isPalindrome('My age is 0, 0 si ega ym.'));
console.log(isPalindrome('_codegod'));
console.log(isPalindrome('.0_0 (: /-\ 0-0'));