// YOUR CODE BELOW

const allSystemsGo = (obj) => {

    for (let key in obj) {
        
        let system = obj[key];

        if (typeof system === 'object') {

            if (!(allSystemsGo(system))) return false;

        } else if (!system) {
            return false;
        }
    }
    return true
}

