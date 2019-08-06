// YOUR CODE BELOW

const searchParty = (name, obj) => {
  
    for (let place in obj) {

        let level = obj[place];

        if (level === name) {

            return [place];

        } else if (Array.isArray(level)) {

            if (level.includes(name)) return [place];

        } else if (typeof level === 'object') {

            if (searchParty(name,level)) return [place].concat(searchParty(name, level));

        } 
    }
    return null;
}


