// add array of numbers

function add(array) {
    let total = 0;
    let length = array.length;
    for (let i =0; i < length; i++) {
        total+=array.pop()
    }
    return total;
}

function add(array) {
    let total = 0;
    for (let i =0; i < array.length; i++) {
        total+=array[i]
    }
    return total;
}