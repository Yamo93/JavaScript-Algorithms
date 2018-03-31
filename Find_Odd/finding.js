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