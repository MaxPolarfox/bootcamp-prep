// YOUR CODE BELOW
const arrayFlattener = (arr) => {
    let flat = [];

    for (let val of arr) {
        if (Array.isArray(val)) flat = flat.concat(arrayFlattener(val))
        else flat.push(val);
    }
    return flat
}