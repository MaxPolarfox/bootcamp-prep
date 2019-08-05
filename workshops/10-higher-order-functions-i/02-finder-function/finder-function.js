// YOUR CODE BELOW

const finderFunction = (arr, func) => {

    for (let val of arr) if (func(val)) return arr.indexOf(val);

    return -1
}