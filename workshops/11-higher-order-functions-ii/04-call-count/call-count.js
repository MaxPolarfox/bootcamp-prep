// YOUR CODE BELOW
const callCount = () => {
  let count = 1;
  return function () {
    return count++;
  }
}
