/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
//     let b = 0;
//   nums = nums.filter(function(item,index,array){
//         if(item === 0){
//             b ++
//             return 
//         }else{
//             return item
//         }
//     });
//     console.log(nums)
//     for(let i = 0;i<b;i++){
//         nums.push(0)
//     }
//     console.log(nums)
    var indexOfZero = [], i;
    for(i = 0; i < nums.length; i++){
      if(nums[i] === 0){
        indexOfZero.push(i);
      }
    }
    for(i = indexOfZero.length - 1; i >= 0; i--){
      nums.splice(indexOfZero[i], 1);
    }
    for(i = 0; i < indexOfZero.length; i++){
      nums.push(0);
    }
};
console.log(moveZeroes([0,1,0,3,12]))
