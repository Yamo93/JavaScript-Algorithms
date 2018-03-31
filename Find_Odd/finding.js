function findOdd(A) {
    //happy coding!
   let result = {};
   
   for (var i = 0; i < A.length; i++) {
     if (!result[A[i]]) {
       result[A[i]] = 0;
       result[A[i]]++;
     } else {
       result[A[i]]++;
     }
   }
   
   
   let odds = [];
   for (let elem in result) {
     if (result[elem] % 2 !== 0) {
       odds.push(elem);
     }
   }
   
  for (let i = 0; i<odds.length; i++) {
    return parseInt(odds[i]);
  }
  
  }

  console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));
  console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]));
  console.log(findOdd([10], 10));
  console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1]));
  console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10]));

  // the shortest solution with bitwise operators
  function findOddTwo(A) {
  
    return A.reduce((l, r) => l ^ r);
  }

  console.log(findOddTwo([1,1,1,1,1,1,10,1,1,1,1]));
  console.log(findOddTwo([5,4,3,2,1,5,4,3,2,10,10]));

  // a similar solution with bitwise operators
  function findOddThree(A) {
      var out = 0;
      for (var i = 0; i<A.length; i++) {
        out = out ^ A[i];
      }
      return out;
  }

  console.log(findOddThree([1,1,1,1,1,1,10,1,1,1,1]));
  console.log(findOddThree([5,4,3,2,1,5,4,3,2,10,10]));