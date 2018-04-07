function uniqueValues(arr1, arr2) {
    let finalArr = [];
    let longestArr = [];
    let shortestArr = [];

    for (let val of arr1) {
        if (!arr2.includes(val) && !finalArr.includes(val)) {
            finalArr.push(val);
        };
    }

    for (let val of arr2) {
        if (!arr1.includes(val) && !finalArr.includes(val)) {
            finalArr.push(val);
        };
    }

    return finalArr;

    // longestArr = arr1.length > arr2.length ? arr1 : arr2;
    // shortestArr = arr1.length > arr2.length ? arr2 : arr1;

    // for (let i = 0; i<longestArr.length; i++) {
    //     if (!shortestArr.includes(longestArr[i])) {
    //         finalArr.push(longestArr[i]);
    //     } 
    // }

    // for (let i = 0; i<shortestArr.length; i++) {
    //     if (!longestArr.includes(shortestArr[i])) {
    //         finalArr.push(shortestArr[i]);
    //     }
    // }
    // return finalArr;
}

console.log(uniqueValues([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(uniqueValues([1, "calf", 3, "piglet"], [7, "filly"]));
console.log(uniqueValues([2, 1, 3], [3, 2, 1]));