const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
  //code here
  if (n1 > n2) { 
    let temp = n1; 
    n1 = n2; 
    n2 = temp; 
  }
  if (n1 > n3) { 
    let temp = n1; 
    n1 = n3; 
    n3 = temp;
  }
  if (n2 > n3) {  
    let temp = n2; 
    n2 = n3;
    n3 = temp; 
  }
  let obj = { 
    min: n1,
    mid: n2,
    max: n3
  }
  return obj;
}
module.exports = minMedMax
