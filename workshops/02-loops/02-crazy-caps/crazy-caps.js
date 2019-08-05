// YOUR CODE BELOW
const crazyCaps = (str) => {
    let newStr = '';

    for (let i = 0; i < str.length; i++) if (i%2) newStr += str[i].toUpperCase(); else newStr += str[i];

    return newStr
}