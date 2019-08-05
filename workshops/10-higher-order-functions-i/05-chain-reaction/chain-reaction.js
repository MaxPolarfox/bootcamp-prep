// YOUR CODE BELOW

const chainReaction = (num, arr) => {
    for (let val of arr) num = val(num);

    return num
}