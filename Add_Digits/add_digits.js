function addUpDigits(num) {
    let sum = 0;
    let splitArr = num.toString().split("").map((elem) => {
        return Number(elem);
    });

    for (let elem of splitArr) {
        sum += elem;
    }

    return sum;
}

console.log(addUpDigits(29));
console.log(addUpDigits(48));
console.log(addUpDigits(96));
console.log(addUpDigits(10));

function addUpDigits2(num) {
    return numArray = num.toString().split('').reduce((num1, num2) => parseInt(num1) + parseInt(num2));
}

console.log(addUpDigits2(29));
console.log(addUpDigits2(48));
console.log(addUpDigits2(96));
console.log(addUpDigits2(10));