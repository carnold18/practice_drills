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