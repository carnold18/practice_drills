// Jesse loves cookies. He wants the sweetness of all his cookies to be greater than value k. 
// To do this, Jesse repeatedly mixes two cookies with the least sweetness. 
// He creates a special combined cookie with:  

// 1 x least sweet cookie + 2 x second least sweet cookie.

// He repeats this procedure until all the cookies in his collection have a sweetness >= k . 
// You are given Jesse's cookies. Print the number of operations required to give the cookies a sweetness >=k . 
// Print -1 if this isn't possible.

// k is the target sweetness
// A is the array of sweetness

function cookies(k, A) {
    let count = 0;
    let a = new Array(...A);
    let sorted = a.sort(function (a, b) { return a - b })
    let array = [];
    for (let i = 0; i < sorted.length+count; i++) {
        if (sorted[0] < k) {
            if (sorted.length === 1) {
                return -1;
            }
            let combo = sorted[0] + 2 * sorted[1];
            array = [combo, ...sorted.slice(2)].sort(function (a, b) { return a - b })
            count++;
            sorted = [...array];
        }
        else {
            return count;
        }
    } 
}


// function cookies(k, A) {
//     let count = 0;
//     let a = new Array(...A);
//     let sorted = a.sort(function (a, b) { return a - b })
//     let array = [];
//     for (let i = 0; i < sorted.length+count; i++) {
//         console.log('sorted:', sorted)
//         console.log('sorted[0]:', sorted[0])
//         if (sorted[0] < k) {
//             if (sorted.length === 1) {
//                 return -1;
//             }
//             let combo = sorted[0] + 2 * sorted[1];
//             array = [combo, ...sorted.slice(2)].sort(function (a, b) { return a - b })
//             console.log('arrayNew:', array)
//             count++;
//             sorted = [...array];
//             console.log('count:', count)
//         }
//         else {
//             return count;
//         }
//     } 
// }

// function cookies(k, A) {
//     let count = 0;
//     let a = new Array(...A);
//     let sorted = a.sort(function (a, b) { return a - b })
//     for (let i = 0; i < sorted.length; i++) {
//         if (sorted[i] < k) {
//             let combo = sorted[i] + 2 * sorted[i+1];
//             sorted[i + 1] = combo;
//             count++;
//         }
//         sorted.sort(function (a, b) { return a - b })
//         console.log('sorted:', sorted)
//     }
//     return count; 
// }