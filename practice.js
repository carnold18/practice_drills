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

function palindrome(string) {
    let array = string.split('');
    let i = 0;
    console.log("inititial check 1st&Last:", array[0] == array[array.length-1]);
    while (i < array.length && array[0] == array[array.length-1]) {
        array.pop();
        array.shift();
        i++;
    }
    if (array.length > 2 ) {
        console.log("final string:", array.join(''));
        console.log("this is not a palindrome");
    } else {
        console.log("final string:", array.join(''));
        console.log("this is a palindrome");
    }
}

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

function indexValue(string) {
    let sorted = string.split("").sort();
    let count = 1;
    let list = "";
    for (let i = 0; i < sorted.length-1; i++) {
        if (sorted[i] == "") {
            sorted.splice(sorted[i],1)
        } 
    }
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] == sorted[i+1]) {
            count++;
        } else {
            list+=sorted[i]+":"+count+","
            count = 1;
        }
    }
    return list;
}

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