// YOUR CODE BELOW
const sumDigits = (num) => {

    let str = String(num);

    if (str.length === 1) return Number(str);

    return Number(str[0]) + sumDigits(Number(str.slice(1)));
}