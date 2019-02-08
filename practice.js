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


convert the number to a string
then convert string to an array
if array length = 6, then
if array length = 5, then 
compare each index in the array to a premade object with key:value pairs
max number of indices is 5
between indices 2 and 3, insert thousand


// var singles = {
//     '0': '',
//     '1': 'one',
//     '2': 'two',
//     '3': 'three',
//     '4': 'four',
//     '5': 'five',
//     '6': 'six',
//     '7': 'seven',
//     '8': 'eight',
//     '9': 'nine',
//     '10': 'ten',
//     '11': 'eleven',
//     '12': 'twelve',
//     '13': 'thirteen',
//     '14': 'fourteen',
//     '15': 'fifteen',
//     '16': 'sixteen',
//     '17': 'seventeen',
//     '18': 'eighteen',
//     '19': 'nineteen',
// }

// var tens = {
//     '2': 'twenty',
//     '3': 'thirty',
//     '4': 'forty',
//     '5': 'fifty',
//     '6': 'sixty',
//     '7': 'seventy',
//     '8': 'eighty',
//     '9': 'ninety',
// }


// function printNumber(num) {
//     let singles = {
//         '0': '',
//         '1': 'one',
//         '2': 'two',
//         '3': 'three',
//         '4': 'four',
//         '5': 'five',
//         '6': 'six',
//         '7': 'seven',
//         '8': 'eight',
//         '9': 'nine',
//         '10': 'ten',
//         '11': 'eleven',
//         '12': 'twelve',
//         '13': 'thirteen',
//         '14': 'fourteen',
//         '15': 'fifteen',
//         '16': 'sixteen',
//         '17': 'seventeen',
//         '18': 'eighteen',
//         '19': 'nineteen',
//     }

//     let tens = {
//         '2': 'twenty',
//         '3': 'thirty',
//         '4': 'forty',
//         '5': 'fifty',
//         '6': 'sixty',
//         '7': 'seventy',
//         '8': 'eighty',
//         '9': 'ninety',
//     }

//     console.log("singles:", singles)
//     let number = num;
//     console.log("num:", num)
//     let string = number.toString();
//     console.log("string:", string)
//     let array = string.split('');
//     console.log("array:", array)
//     let length = string.length;
//     console.log('length:', length)

//     switch (length) {
//         case 1:
//             console.log(array[0])
//             console.log(typeof array[0])
//             console.log(singles[array[0]])
//             // singles[array[0]]
//         break;
//         case 2:
//             '2 digits'
//         break;
//     }
// }



function printNumber(num) {
    let singles = {
        '0': '',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen',
    }
    let tens = {
        '2': 'twenty',
        '3': 'thirty',
        '4': 'forty',
        '5': 'fifty',
        '6': 'sixty',
        '7': 'seventy',
        '8': 'eighty',
        '9': 'ninety',
    }
    let number = num;
    let string = number.toString();
    let array = string.split('');
    let length = string.length;

    switch (length) {
        case 1:
            console.log(array[0])
            console.log(singles[array[0]])
        break;
        case 2:
            if (number > 9 && number < 20) {
                console.log(array[0],array[1])
                let teen = array[0]+array[1]
                console.log(singles[teen])
            }
            if (number >= 20 && number < 100) {
                console.log(array[0],array[1])
                console.log(tens[array[0]],singles[array[1]])
            }
        break;
        case 3:
            if (array[1] == 1 || array[1] == 0) {
                if (array[1] == 0 && array[0] == 0) {
                    console.log(singles[array[0],'hundred'])
                }
                if (array[1] == 0 && array[0] !== 0) {
                    console.log(singles[array[0]],'hundred',singles[array[2]])
                }
                if (array[1] == 1) {
                    let teen = array[1]+array[2]
                    // console.log(teen)
                    // console.log(singles[array[0]])
                    // console.log(singles[teen])
                    console.log(singles[array[0]],'hundred',singles[teen])
                }
            }
            if (array[1] != 1 && array[1] != 0) {
                console.log(singles[array[0]],'hundred',tens[array[1]],singles[array[2]])
            }
        break;
        case 4:
            if (array[3] == 0 && array[2] == 0 && array[1] == 0) {
                console.log(singles[array[0]],'thousand')
            }
    }
}



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
