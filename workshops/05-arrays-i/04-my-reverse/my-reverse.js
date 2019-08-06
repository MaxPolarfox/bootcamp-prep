// YOUR CODE BELOW

const myReverse = (arr) => {
    let copy = [];

    for (let i = arr.length; i > 0; i--) copy.push(arr.pop());

    return copy
}