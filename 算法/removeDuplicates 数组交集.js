/**
 * @param {number[]} nums
 * @return {number}
 * removeDuplicates 数组交集
 */

var removeDuplicates = function(nums) {
    const distinctValuesOfArray = arr => {
         return [...new Set(arr)].length
    };
    let m =  distinctValuesOfArray(nums)
    if(m < nums.length){
        return true
    }else if(m > nums.length){
        return false
    }else{
        return false
    }
    
};
let a = [1, 2, 2, 1];
let b = [2,2,3];
//两数组交集，放一边
var intersect = function(nums1, nums2) {
    let aa = nums1;
    let bb = nums2;
   
        const intersection = (a, b) => {
            const s = new Set(b);
            return a.filter(x => s.has(x));
          };
          return intersection(nums1, nums2)
    
};
// console.log(intersect(a,b))

//如何正确的return 结果
var plusOne = function(digits) {
    //超出安全范围
    if(parseInt(digits.join(""))  > Math.pow(2, 53) - 1){
        // console.log("大了")
        if(digits[digits.length - 1] !== 9){
            digits[digits.length - 1] = digits[digits.length - 1] + 1
            return digits
       }else{
            let cc = 1;
            function check(digits){
                digits[digits.length - cc] = 0
                //检查下一位
                if( digits[digits.length - cc -1] == 9){
                    digits[digits.length - cc -1] = 0
                    // console.log(digits.join(""))
                    cc ++ 
                    // let star = digits.join("").toString().lastIndexOf("9")
                    check(digits)
                }else if( digits[digits.length - cc ] !== 9){
                    if(digits[0] == 0){
                        digits.unshift(1)
                        return digits
                    }else{
                        cc ++ 
                        digits[digits.length - cc ] = digits[digits.length - cc ] + 1
                        // console.log(digits.join(""))
                        return digits
                    }
                }
            }
            check(digits)
            return digits.join("")
        }
    }else{
        // 在安全范围内
        let b = parseInt(digits.join("")) + 1
        let d = b.toString().split("")
        let c = []
        let m = d.filter(function(item,index,array){
            c.push(parseInt(item))
        })
        return c
    } 
};
//   let plusa = [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]
 let plusa = [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]
console.log(plusOne(plusa))
