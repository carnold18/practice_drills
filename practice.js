// confirm a palindrome

function palindrome(string) {
    let array = string.split('');
    let i = 0;
    while (i < array.length && array[0] == array[array.length-1]) {
        array.pop();
        array.shift();
        i++;
    }
    if (array.length > 2 ) {
        console.log("false - this is not a palindrome");
    } else {
        console.log("true - this is a palindrome");
    }
}

// count the number of indices for each letter in a string

function indexValue(string) {
    let sorted = string.split("").sort();
    let count = 1;
    let array = [];
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] == sorted[i+1]) {
            count++;
        } else {
            array.push(sorted[i]+":"+count)
            count = 1;
        }
    }
    return array.splice(1).join()
}

// reverse the words in a string

function reverseWordsInString(string) {
    let split = string.split(" ");
    let reverse = split.reverse();
    let reversedString = reverse.join(" ");
    return reversedString;
}

// recursion for reversing a string

function reverse(str) {
    if (str.length <= 1) {
        console.log(str);
        return str;
    }
    console.log('str', str);
    console.log('substr', str.substr(1))
    console.log('str[0]', str[0])
    return reverse(str.substr(1)) + str[0];
}

function reverseString(str) {
    if (str === '') {
        return '';
    } else {
        console.log(str.substr(1) + str[0])
        return reverseString(str.substr(1)) + str[0];
    }
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


// function fib(x) {
//     let array = [0,1];
//     if (x<=0) return;
//     if(x===1) return array;
//     // console.log("array:", array)
//     // console.log("addition of two previous:", array[x-1]+array[x-2])
//     array.push(array[x-1]+array[x-2]);
//     // console.log("new array:", array)
//     return array;
// }


// given a number N where 1 million > N > 0 whole numbers only 
// output the number in words // ie: 384765 output three hundred eighty four thousand seven hundred sixty five












// function palindrome(string) {
//     let array = string.split('');
//     let i = 0;
//     console.log("inititial check 1st&Last:", array[0] == array[array.length-1]);
//     while (i < array.length && array[0] == array[array.length-1]) {
//         array.pop();
//         array.shift();
//         i++;
//     }
//     if (array.length > 2 ) {
//         console.log("final string:", array.join(''));
//         console.log("this is not a palindrome");
//     } else {
//         console.log("final string:", array.join(''));
//         console.log("this is a palindrome");
//     }
// }

// function indexValue(string) {
//     let sorted = string.split("").sort();
//     let count = 1;
//     let list = "";
//     for (let i = 0; i < sorted.length-1; i++) {
//         if (sorted[i] == "") {
//             sorted.splice(sorted[i],1)
//         } 
//     }
//     for (let i = 0; i < sorted.length; i++) {
//         if (sorted[i] == sorted[i+1]) {
//             count++;
//         } else {
//             list+=sorted[i]+":"+count+","
//             count = 1;
//         }
//     }
//     return list;
// }
