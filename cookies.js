function cookies(k, A) {
    let count = 0;
    let a = new Array(...A);
    let sorted = a.sort(function (a, b) { return a - b })
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] < k) {
            let combo = sorted[i] + 2 * sorted[i+1];
            sorted[i + 1] = combo;
            count++;
        }
        sorted.sort(function (a, b) { return a - b })
        console.log('sorted:', sorted)
    }
    return count; 
}