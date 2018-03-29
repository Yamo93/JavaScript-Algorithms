// Largest numbers in arrays
console.log("Largest numbers in arrays");

function largestOfFour(arr) {
  //You can do this!
  var longestOne = 0;
  var longestTwo = 0;
  var longestThree = 0;
  var longestFour = 0;
  var newArray = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[0][i] > longestOne) {
      longestOne = arr[0][i];
    } if (arr[1][i] > longestTwo) {
      longestTwo = arr[1][i];
    } if (arr[2][i] > longestThree) {
      longestThree = arr[2][i];
    } if (arr[3][i] > longestFour) {
      longestFour = arr[3][i];
    }
  }
  newArray.push(longestOne, longestTwo, longestThree, longestFour);
  return newArray;
}
largestOfFour([[1,2,3], [6,2,4], [9,2,3], [2,4,1]]);
// Just changing something for fun