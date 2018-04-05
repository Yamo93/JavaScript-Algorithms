function lengthLongest(str) {
    let longestLength = 0;
    let newArr = str.split(" ");

    // for (let i = 0; i<newArr.length; i++) {
        // if (newArr[i].length > longestLength) {
        //     longestLength = newArr[i].length;
        // }
        newArr.forEach((word) => {
            longestLength = longestLength < word.length ? word.length : longestLength; // a cleaner way
        });
        
    // }
    return longestLength;
}

console.log(lengthLongest('I am a coding dude'));
console.log(lengthLongest('I would like to work for Google'));
console.log(lengthLongest("Ain't no fun if the homie don't code none"));

// My second solution :-)
function lengthLongestTwo(str) {
    let sortedArr = [];
    let newArr = str.split(" ");

    for (let i = 0; i < newArr.length; i++) {
        sortedArr.push(newArr[i].length);
        sortedArr.sort();
    }

    return sortedArr[sortedArr.length-1];
}

console.log(lengthLongestTwo('I am a coding dude'));
console.log(lengthLongestTwo('I would like to work for Google'));
console.log(lengthLongestTwo("Ain't no fun if the homie don't code none"));

function lengthLongestThree(str) {
    let longestLength = str.split(" ").sort((word1, word2) => {
        return word2.length - word1.length;
    })[0].length;
    return longestLength;
    //return strArray[0].length;
}


console.log(lengthLongestThree('I am a coding dude'));
console.log(lengthLongestThree('I would like to work for Google'));
console.log(lengthLongestThree("Ain't no fun if the homie don't code none"));


