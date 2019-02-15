var twoSum = function(nums, target) {
    let array = [];
    let index1 = 0;
    let index2 = 0;
    let findAllIndices = function(arr, val) {
        var indexes = [], k;
        for(k = 0; k < arr.length; k++)
            if (arr[k] === val)
                indexes.push(k);
        return indexes;
    }
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length-1; j++) {
            if (nums[i]+nums[j+1] === target) {
                console.log(nums[i]);
                console.log(nums[j+1]);
                index1+=nums[i];
                index2+=nums[j+1];
                if (nums[i] === nums[j+1]) {
                    findAllIndices();
                } else {
                    array.push(nums.indexOf(index1));
                    array.push(nums.indexOf(index2));
                    return array;
                }
                
            }
        }
    }
};