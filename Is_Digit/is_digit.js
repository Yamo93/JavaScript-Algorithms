function isDigit(char) {
    let myDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let newChar = parseInt(char);
    
    return myDigits.includes(newChar);
}

console.log(isDigit('1'));
console.log(isDigit('3'));
console.log(isDigit('d'));