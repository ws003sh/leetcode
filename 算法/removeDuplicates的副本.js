//从排序数组中删除重复项 removeDuplicates
var removeDuplicates = function(nums) {

    const check = nums => {
        for(let i = 0;i < nums.length;i ++){
            if(nums[i] == nums[i+1]){
                nums.splice(i,1)
            }
        }
        return nums
    }
    check(nums)
    check(nums)
    check(nums)
    console.log(nums)
};
console.log(removeDuplicates([0,0,0,0,0]))
