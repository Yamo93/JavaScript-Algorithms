function capitalize(str) {
    let newArr = str.split(" ");

    // newArr = newArr.forEach((elem) => {
    //     let firstLetter = elem.charAt(0).toUpperCase();
    //     elem = firstLetter + elem.slice(1);
    //     return elem;
    // });
    for (let i = 0; i<newArr.length; i++) {
        newArr[i] = newArr[i][0].toUpperCase() + newArr[i].slice(1);
    }
    return newArr.join(" ");
}

console.log(capitalize('I am a coding dude'));
console.log(capitalize('I would like to work for Google'));

function capitalize2(str) {
    let strArr = str.split(" ");
    let newArr = [];

    strArr.map((elem) => {
        newArr.push(elem[0].toUpperCase() + elem.slice(1));
    });

    return newArr.join(" ");
}


console.log(capitalize2('I am a coding dude'));
console.log(capitalize2('I would like to work for Google'));


function capitalize2Altered(str) {
    let strArr = str.split(" ");

    strArr = strArr.map((elem) => {
        const firstLetter = elem.charAt(0).toUpperCase();
        // elem = firstLetter.concat(elem.slice(1, elem.length));
        // return elem;
        return firstLetter + elem.slice(1);
    });
    return strArr.join(" ");
}

console.log(capitalize2Altered('I am a coding dude'));
console.log(capitalize2Altered('I would like to work for Google'));


function capitalize3(str) {
    let strArr = str.split(" ");

    for (let i = 0; i<strArr.length; i++) {
        strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
    }
    return strArr.join(" ");
}

console.log(capitalize3('I am a coding dude'));
console.log(capitalize3('I would like to work for Google'));