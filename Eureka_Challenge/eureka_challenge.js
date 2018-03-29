function sumDigPow(a, b) {
  // Your code here
  let final = [];
  
  
    for (let j = a; j<=b; j++) {
      let sum = 0;
      let newNum = j.toString().split("");
      
      for (let x = 0; x<j.toString().length; x++) {
        sum += Math.pow(newNum[x], (x+1));
      }

        if (sum === j) {
          final.push(j);
        }
    }
    
  
  return final;
}