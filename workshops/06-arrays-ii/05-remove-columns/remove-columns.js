// YOUR CODE BELOW
const removeColumns = (arr, num) => {
  let removed = [];
  
  for (let val of arr) removed.push(val.slice(0, val.length - num));
  
  return removed
}
