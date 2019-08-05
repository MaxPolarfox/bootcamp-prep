// YOUR CODE BELOW
const cacheSavings = (func) => {
    let obj = {};
  
  return function (num) {
    if (!obj[num]) obj[num] = func(num);
    
    return obj[num];
  }
}
