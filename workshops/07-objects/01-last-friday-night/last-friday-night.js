// YOUR CODE BELOW
const lastFridayNight = (arr) => {
  let count = 0;
  
  for (let val in arr) {
    count += arr[val].amount;
  }
  return count
}
