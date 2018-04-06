function isMissing(arr) {
    let myDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let missingNum = 0;

    arr = arr.sort((a, b) => {
        return a-b;
    });

    for (let i = 0; i<myDigits.length; i++) {
        if (arr.indexOf(myDigits[i]) === -1) {
            missingNum = i;
        } 
    }
    return missingNum;
}

console.log(isMissing([0, 3, 5, 8, 4, 6, 1, 9, 7]));
console.log(isMissing([1, 2, 5, 0, 6, 7, 9, 3, 4]));

// slightly shorter version

function isMissing2(arr) {
    const myDigits = arr.sort((num1, num2) => {
        return num1 - num2;
    });

    for (let i = 0; i<myDigits.length; i++) {
        if (i !== myDigits[i]) {
            return i;
        }
    }
}

console.log(isMissing2([0, 3, 5, 8, 4, 6, 1, 9, 7]));
console.log(isMissing2([1, 2, 5, 0, 6, 7, 9, 3, 4]));