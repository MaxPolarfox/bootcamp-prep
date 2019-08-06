// YOUR CODE BELOW
const reverseArray = (arr) => {
    let creversed = [];

    if (arr.length === 1) return arr;

    return [arr[arr.length-1]].concat(reverseArray(arr.slice(0,-1)));
}