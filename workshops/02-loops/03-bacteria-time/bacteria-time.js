// YOUR CODE BELOW
const bacteriaTime = (curr, target) => {
    let count  = 0;

    if (curr > target) return 'targetNum must be larger than currentNum'

    for (let i = curr; i < target; i *= 2)  count += 20;

    return count
}

