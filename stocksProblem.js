/*
Let’s say you are given an array of n integers,
which represents the prices of a stock over n consecutive days.
Please write a function in the language of your choice that
returns the biggest loss you could incur over those n days by buying high and selling low.

For example: if the array contains |14|1|18|23|12|8|16|,
then the biggest possible loss is $15 (buying at $23 and selling at $8).
*/

// hold one index constant and compare to remaining indices
// subtract every index after selected value from the original index value (if value is less than original)
// create new array
// push each of those values into new array 

let sumArray = [];
let array = [8,55,2,2,5,50,4];
function findMax(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
    let index = arr[i];
    for (let j = arr.indexOf(index); j < arr.length - 1; j++) {
        if (index > arr[j + 1]) {
            sumArray.push(index-arr[j+1]);
        }}
	}
	return Math.max(...sumArray);
}
findMax(array);
sumArray.length = 0;


// function findMax(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//     let index = arr[i];
//     // console.log('indexOL:', index)
//     for (let j = arr.indexOf(index); j < arr.length - 1; j++) {
//         if (index > arr[j + 1]) {
//             // console.log('indexIL:', index)
//             // console.log('nextValue:', arr[j+1])
//             // console.log('subtraction:', index-arr[j+1]);
//             sumArray.push(index-arr[j+1]);
//         }}
//         // console.log('sumArray:', sumArray);
// 	}
// 	return Math.max(...sumArray);
// }