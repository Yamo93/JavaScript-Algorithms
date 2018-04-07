function digitNum(str) {
    let alteredArr = str.replace(/[\D]/g, ' ').split(" ");
    let sum = 0;

    alteredArr.forEach((num) => {
        sum += Number(num);
    });

    return sum;
}


console.log(digitNum("2 apples, 12 oranges"));
console.log(digitNum("123450"));
console.log(digitNum("Your payment method is invalid"));

function digitNum2(str) {
    let nums = str.match(/\d+/g) || [];
    let sum = 0;

    nums.forEach((num) => {
        sum += Number(num);
    });

    return sum;
}


console.log(digitNum2("2 apples, 12 oranges"));
console.log(digitNum2("123450"));
console.log(digitNum2("Your payment method is invalid"));