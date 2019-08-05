// YOUR CODE BELOW

const whosASpecial  = (arr) => {
    let str = '';

    for (let val of arr) {
        str += ` ${val.name} the ${val.species} is very special!`;
    }

    return str.slice(1)
}

