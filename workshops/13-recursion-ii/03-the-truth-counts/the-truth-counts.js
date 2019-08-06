// YOUR CODE BELOW

const theTruthCounts = (arr) => {
    let count = 0;

    for (let val of arr) {
        if (Array.isArray(val)) count += theTruthCounts(val);
        else if (val) count += 1;
    }
    return count
}