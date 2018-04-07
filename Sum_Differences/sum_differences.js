function sumOfDifferences(arr) {
    let sum = 0;
    sortedArr = arr.sort((num1, num2) => {
        return num1-num2;
    });

    for (i = sortedArr[0]; i<=sortedArr[sortedArr.length-1]; i++) {
        sum += i;
    }

    return sum;
}

console.log(sumOfDifferences([10, 5]));
console.log(sumOfDifferences([3, 7]));

function sumOfDifferences2(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    let sum = 0;

    for (let i = min; i<=max; i++) {
        sum += i;
    }

    return sum;
}

console.log(sumOfDifferences2([10, 5]));
console.log(sumOfDifferences2([3, 7]));