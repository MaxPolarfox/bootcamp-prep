// YOUR CODE BELOW
const sumNums = (num) => {
  
  if (num === 1 ) return 1;
  return num + sumNums(num-1); 
}
