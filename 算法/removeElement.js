/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    
    if(nums === [] ){

        // return

    }else {
        let m = 0
        nums.forEach(function(element, index, array){
            if(element === val ){
                array[index] = ''
                m ++ 
            }
        })
        nums.sort()
        nums.splice(0,m)
        return nums
    }
    
};
let nums = [2]
let val = 2

console.log(removeElement(nums,val))
