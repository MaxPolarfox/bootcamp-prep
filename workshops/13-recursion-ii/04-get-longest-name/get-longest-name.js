// YOUR CODE BELOW

const getLongestName = (obj) => {

    let longest = '';

    for (let name in obj) {

        if (name.length > longest.length) longest = name;

        if (obj[name]) {
            let subLongest = getLongestName(obj[name]);

            if (subLongest.length > longest.length) longest = subLongest;
        }
    }
    return longest
 }
