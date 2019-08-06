// YOUR CODE BELOW
const arraySum = (arr) => {
    let sum = 0;

    for (let val of arr) {
        if (Array.isArray(val)) sum += arraySum(val);
        else sum += val;
    }
    return sum
}