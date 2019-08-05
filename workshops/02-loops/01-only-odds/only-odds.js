// YOUR CODE BELOW

const onlyOdds = (num) => {
    let count = 0;
    debugger;
    for (let i = num; i > 0; i--) {
        if (i%2) count += i;
    }

    return count
}
