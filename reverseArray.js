// print each element in an array in reverse order as a single line of space-separated integers

function reverseArray(a) {
    let list = '';
    let space = " ";
    for (let i = a.length - 1; i >= 0; i--) {
        list += a[i] + space
    }
    return list.substr(0, list.length - 1);
}

function reverseArray(a) {
    a.reverse().join(" ")
}