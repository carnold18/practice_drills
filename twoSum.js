var twoSum = function(nums, target) {
    let array = [];
    let index1 = 0;
    let index2 = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length-1; j++) {
            if (nums[i]+nums[j+1] === target) {
                console.log(nums[i]);
                console.log(nums[j+1]);
                index1+=nums[i];
                index2+=nums[j+1];
                if (nums[i] === nums[j+1]) {
                    console.log('the index values are the same');
                    console.log('so, i am invoking the findAllIndices function');
                    var findAllIndices = function(arr, val) {
                        let indexes = []
                        for(let k = 0; k < arr.length; k++)
                            if (arr[k] === val) {
                                indexes.push(k);
                            }
                            // console.log('indexes of same index value array:', indexes);
                            // console.log('master array:', array)
                        // return indexes;
                        array = [...indexes]
                        console.log('indexes of same index value array:', indexes);
                        console.log('master array:', array)
                    }
                    findAllIndices(nums, nums[i]);
                    return array;
                } else {
                    array.push(nums.indexOf(index1));
                    array.push(nums.indexOf(index2));
                    return array;
                }
            }
        }
    }
};