function isValidTime(str) {
    let timeArray = str.split(":");

    if (Number(timeArray[0]) > 23 || Number(timeArray[1]) > 59) {
        return false;
    } return true;
}

console.log(isValidTime('24:00'));
console.log(isValidTime('23:31'));
console.log(isValidTime('22:00'));
console.log(isValidTime('23:60'));