// YOUR CODE BELOW
const myLastIndexOf = (arr, search, start) => {

    if (start === undefined) start = arr.length -1;

    for (let i = start; i > 0; i--) {
        if (arr[i] === search) return i;
    }
    return -1;
}
