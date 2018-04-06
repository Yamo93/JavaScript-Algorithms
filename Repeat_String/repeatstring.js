function repeating(str, num) {
    return str.repeat(num);
}

console.log(repeating('codingdude', 2));
console.log(repeating('google', 3));

function repeating2(str, num) {
    let numbah = num;
    let myArray = [];
    
    while (numbah > 0) {
        numbah -= 1;
        myArray.push(str);
    }

    return myArray.join("");
}

console.log(repeating2('codingdude', 2));
console.log(repeating2('google', 3));

function repeating3(str, num) {
    let repeatedStr = '';

    while (num > 0) {
        repeatedStr += str;
        //repeatedStr = repeatedStr.concat(str);
        num--;
    }

    return repeatedStr;
}

console.log(repeating3('codingdude', 2));
console.log(repeating3('google', 3));
