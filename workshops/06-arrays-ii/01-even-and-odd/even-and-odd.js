// YOUR CODE BELOW
const evenAndOdd = (arr) => {
    let even = [];
    let odd = [];

    for (let val of arr) {
        if (val%2) odd.push(val);
        else even.push(val);
    }
    return [even, odd]
}