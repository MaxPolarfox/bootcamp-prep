// YOUR CODE BELOW

const myForEach = (arr, func) => {

    for (let i=0; i<arr.length; i++) {
        console.log(func(arr[i], i));
    }
}