// YOUR CODE BELOW
const rotateArray = (arr, num) => {
   
  let copy = arr.slice();
  
  if (num > 0) {
    while (num > 0) {
      copy.unshift(copy.pop());
      num --;
    }
  } else {
    while (num < 0) {
      copy.push(copy.shift());
      num++;
    }
  }
  return copy
}
