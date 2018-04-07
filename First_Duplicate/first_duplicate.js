function firstDuplicate(arr) {
    let currentNew = arr[0];
    let newNums = [];

    for (let i = 1; i<arr.length; i++) {
        if (currentNew === arr[i]) {
            return currentNew;
        } else {
            newNums.push(currentNew);
            currentNew = arr[i];
        }

        if (newNums.includes(arr[i])) {
            return arr[i];
        }
    }
     return -1;
}


console.log(firstDuplicate([2, 3, 3, 1, 5, 2]));
console.log(firstDuplicate([2, 2]));
console.log(firstDuplicate([2, 1, 3]));

function firstDuplicate2(arr) {
    let duplicateObject = {};

    for (let num of arr) {
        if (duplicateObject.hasOwnProperty(num)) {
            return num;
        }
        duplicateObject[num] = num;
    }
    
    return -1;
}


console.log(firstDuplicate2([2, 3, 3, 1, 5, 2]));
console.log(firstDuplicate2([2, 2]));
console.log(firstDuplicate2([2, 1, 3]));