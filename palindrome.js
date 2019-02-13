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