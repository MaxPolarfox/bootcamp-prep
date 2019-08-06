// YOUR CODE BELOW
const partial = (func, a) => {
  return function (b) {
    return func(a,b);
  }
}
