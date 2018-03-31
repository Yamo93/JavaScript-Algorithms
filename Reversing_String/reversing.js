function reversing(str) {
    return str.split("").reverse().join("");
}

console.log(reversing("Gebrewold"));
console.log(reversing("Javascript"));

function reversingTwo(str) {
    let reversedStr = [];

    for (let i = str.length-1; i>=0; i--) {
        reversedStr.push(str[i]);
    }

    return reversedStr.join("");
}

console.log(reversingTwo("Gebrewold"));
console.log(reversingTwo("Javascript"));

function reversingThree(str) {
    let reversedArr = str.split("");
    let newStr = '';

    for (let i = reversedArr.length-1; i>=0; i--) {
        newStr = newStr.concat(reversedArr[i]);
    }

    return newStr;
}

console.log(reversingThree("Gebrewold"));
console.log(reversingThree("Javascript"));