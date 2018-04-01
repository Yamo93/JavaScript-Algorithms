function palindrome(str) {
    let reg = /[\W\s_]/g;
    // the \W is to remove all non-alphanumeric characters, and the \s is to remove all whitespace
    let newStr = str.toLowerCase().replace(reg, "");
    let reversedStr = newStr.toLowerCase().split("").reverse().join("");

    if (newStr === reversedStr) {
        return true;
    } return false;
}

console.log(palindrome('A man, a plan, a canal. Panama'));
console.log(palindrome('My age is 0, 0 si ega ym.'));
console.log(palindrome('_codegod'));
console.log(palindrome('.0_0 (: /-\ 0-0'));