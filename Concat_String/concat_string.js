function concatStr(firstName, lastName) {
    return `Hi, my name is ${firstName} ${lastName}.`;
}

console.log(concatStr('Yamo', 'Gebrewold'));
console.log(concatStr('Billy', 'Bob'));

function concatStrTwo(firstName, lastName) {
    return 'Hi, my name is ' + firstName + ' ' + lastName + '.';
}

console.log(concatStrTwo('Yamo', 'Gebrewold'));
console.log(concatStrTwo('Billy', 'Bob'));

function concatStrThree(firstName, lastName) {
    return 'Hi, my name is ' + firstName.concat(' ', lastName, '.');
}

console.log(concatStrThree('Yamo', 'Gebrewold'));
console.log(concatStrThree('Billy', 'Bob'));

function concatStrFour(firstName, lastName) {
    const intro = 'Hi, my name is '.concat(firstName, ' ', lastName, '.');

    return intro;
}

console.log(concatStrFour('Yamo', 'Gebrewold'));
console.log(concatStrFour('Billy', 'Bob'));