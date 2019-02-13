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