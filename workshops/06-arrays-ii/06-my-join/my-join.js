// YOUR CODE BELOW
const myJoin = (arr, sep) => {
  let str = '';
  
  if (sep === undefined) sep = ',';
  
  for (let val of arr) {
    if (!val) str += sep;
      else str += val +sep;
   }
  return str.slice(0, str.length - sep.length)
}
