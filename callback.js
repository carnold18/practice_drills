// Give me an example of a callback

let createArray = function() {
    return array = [];
}

function addToArray(n,callback) {
	callback();
    for (let i = 0; i < n; i++) {
        array[i] = i;
    }
    return array;
}

addToArray(7,createArray)