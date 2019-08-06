// YOUR CODE BELOW

const zooInventory = (arr) => {
    let full = [];

    for (let val of arr) full.push(`${val[0]} the ${val[1][0]} is ${val[1][1]}.`);
    
    return full
}