// given a number N where 1 million > N > 0 whole numbers only 
// output the number in words // ie: 384765 output three hundred eighty four thousand seven hundred sixty five

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
        break;
        case 5:
        break;
        case 6:
        break;
        case 7:
            console.log(singles[array[0]],'million')
        break;
    }
}

// convert the number to a string
// then convert string to an array
// if array length = 6, then
// if array length = 5, then 
// compare each index in the array to a premade object with key:value pairs
// max number of indices is 5
// between indices 2 and 3, insert thousand


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