// given an index N find the value at that index in the fibonacci sequence
// recursively at index N 
// fibonacci sequence = 1,1,2,3,5,8,13,21.. 
// indices = 1,2,3,4,5,6,7, 8 
// example: 6, output 8

function fib(x) {
    if (x <= 0) return 0;
    if (x === 1) return 1;
    return fib(x-1)+fib(x-2);
}

// calculate fibonacci sequence based on numerical input

function fibIterative(num) {
    let array = [0,1]
    for (let i = 1; i < num; i++) {
        array.push(array[i]+array[i-1])
    }
    return array[num]
}

function fibonacciIterative(num) {
    let array = [0,1]
    for (let i = 1; i < num; i++) {
        array.push(array[i]+array[i-1])
    }
    return array
}

function fibPop(num) {
    let array = [0,1]
    for (let i = 1; i < num; i++) {
        array.push(array[i]+array[i-1])
    }
    return array.pop()
}