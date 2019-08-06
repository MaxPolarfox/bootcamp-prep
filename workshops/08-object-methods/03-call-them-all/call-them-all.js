// YOUR CODE BELOW
const callThemAll = (obj, num) => {
    let arr = [];

    for (let func in obj) {
        if (typeof obj[func] === 'function') arr.push(obj[func](num));
    }
    return arr
}