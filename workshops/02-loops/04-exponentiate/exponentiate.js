// YOUR CODE BELOW

const exponentiate  = (base, power) => {
    count  = 1;

    while (power) {
        count *= base;
        power--;
    }
    return count
}