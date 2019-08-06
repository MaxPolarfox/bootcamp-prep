// YOUR CODE BELOW
const  billerBuilder = (str) => {
  return function (num) {
    if (str === 'NY') return num * 1.03 * 1.04;
    else return num * 1.05 * 1.06625;
  }
}
