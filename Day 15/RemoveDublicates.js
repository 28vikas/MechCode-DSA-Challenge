


let removeDuplicates = function (nums){
    let x = 0;

    for(let i = 0; i<nums.length; i++){
        if(nums[i]>nums[x]){
            x = x+1;
           nums[x] = nums[i]
        }
    }

    return x+1;
}



let result = removeDuplicates([0,1,2,1,1,2,2,3,3,4,4,6,7]);


console.log(result);

