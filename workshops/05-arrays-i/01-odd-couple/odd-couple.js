// YOUR CODE BELOW
const oddCouple = (arr) => {
    newArr = [];

    for (let val of arr) if (newArr.length < 2 && val%2) newArr.push(val);

    return newArr
}