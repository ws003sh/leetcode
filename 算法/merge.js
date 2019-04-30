/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

    let len = nums1.length
    let lessThanzero = 0

    for(let k = 0; k < len;k++){
        if(nums1[k] < 0){
            lessThanzero ++ 
        }
    }

    for(let j = 0; j < nums2.length;j++){
        if(nums2[j] < 0){
            lessThanzero ++ 
        }
    }

    for(let i = 0;i < nums2.length ; i++){
        nums1.push(nums2[i])
    }
    
    function sequence(a,b){
        if (a>b) {
            return 1;
        }else if(a<b){
            return -1
        }else{
            return 0;
        }
    }
    nums1.sort(sequence)
    nums1.splice(0 + lessThanzero ,len - m )

    return nums1
};
let nums1 = [1,2,3,0,0,0]
let m = 3;
let nums2 = [2,5,6]
let n = 3;

console.log(merge(nums1,m,nums2,n))
