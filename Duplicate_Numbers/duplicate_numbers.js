function isDuplicate(arr) {
    const sortedArray = arr.sort((a, b,) => {
        return a-b;
    });
    
    for (let i = 0; i<sortedArray.length - 1; i++) {
        if (sortedArray[i] === sortedArray[i+1]) {
            return true;
        }
    } return false;
}

console.log(isDuplicate([1, 2, 3, 1]));
console.log(isDuplicate([3, 1]));
console.log(isDuplicate([0, 4, 5, 0, 3, 6]));