function longestWord(str) {
    let longestLength = 0;
    let longestStr = '';
    str = str.split(" ");

    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].replace(/[\W_]/g, '');
        console.log(str[i]);
        if (str[i].length > longestLength) {
            longestLength = str[i].length;
            longestStr = str[i];
        }
    }   

        return longestStr;
}

console.log(longestWord('Ready, steady, go!'));
console.log(longestWord('Ready[[[, steady, go!'));
console.log(longestWord('ABCd'));

function longestWord2(str) {
    let filteredArray = str.replace(/[\W_]/g, ' ').split(" ");
    let largest = '';
    filteredArray.forEach((word) => {
        largest = word.length > largest.length ? word : largest;
    });

    return largest;
}

console.log(longestWord2('Ready, steady, go!'));
console.log(longestWord2('Ready[[[, steady, go!'));
console.log(longestWord2('ABCd'));