/* 
 字符串翻转 reverseString  
 是否是3的幂函数 isPowerOfThree
 求质数 isPrime
 找到唯一 singleNumber
 对比宝石 numJewelsInStones
 数组拆分 arrayPairSum
 旋转数组 rotate
 翻转整数 reverse
*/

// 字符串翻转 reverseString 
    if(!s){
       return s;
    }else{
        let strArr = s.split("")
        let rStrArr = [];
        for(let i = strArr.length -1;i >= 0 ; i --){
            rStrArr.push(strArr[i]) 
        }
        let ans = rStrArr.join("")
        return ans;
    }
};
// reverseString("hello")
//求是否是3的幂函数
var isPowerOfThree = function(n) {
    if(!n){
        return false;
    }else{
        function get(n){
            //如果除下来有余数
            if(n === 1 || n === 3 ){
                return true
            }else{
                if(n < 3){
                    console.log(n)
                    return false
                }else{
                    console.log(n/3)
                    return  get(n/3)
                }
            }
        }
    }
    return get(n)
};
// 求质数
function isPrime(n) {
    if (n <= 3) { return n > 1; }
    if (n % 2 == 0 || n % 3 == 0) { return false; }
    for (var  i = 5; i * i <= n; i += 6) {
        if (n % i == 0 || n % (i + 2) == 0) { return false; }
    }
    return true;
}
// console.log(isPrime(10))
//找到唯一
let u = [3,1,1,2,2,5,5]
var singleNumber = function(nums) {
   
   const get = function(nums){
        for(let i = 0;i<nums.length;i=i+2){
    
            if(nums[i] === nums[i + 1]){
                
            }else if(nums[i] !== nums[i + 1]){
                let a = [];
                a.push(nums[i-2])
                a.push(nums[i-1])
                a.push(nums[i])
                a.push(nums[i+1])
                a.push(nums[i+2])

                return a[2]
            }
        }
   }
  return get( nums.sort())
};
// console.log(singleNumber(u))
//对比宝石 numJewelsInStones
let J = "aA";
let S = "aAAbbbb";
var numJewelsInStones = function(J, S) {
    let Ja = [];
    for(let i = 0;i<J.length;i++){
        Ja.push(J[i])
    }
    function check(a,S){
        let ansow = 0;
        for(let i = 0;i<a.length;i++){
            let f = a[i];
            for(let i = 0;i<S.length;i++){
                if(f === S[i]){
                    ansow++;
                }
            }
        }
        return ansow;
    }
    return check(Ja,S)
};
// console.log(numJewelsInStones(J, S))
let moves = "UU";
var judgeCircle = function(moves) {
    let sMoves = moves.split("");
    let x = 0;
    let y = 0;
    for(let i = 0;i <sMoves.length;i++){
        if(sMoves[i] === "U"){
            y ++
        };
        if(sMoves[i] === "D"){
            y --
        };
        if(sMoves[i] === "L"){
            x --
        };
        if(sMoves[i] === "R"){
            x ++
        };
    }
    if(x + y === 0){
        return true
    }else{
        return false
    }
    
};

// console.log(judgeCircle(moves))

let gh = [6214, -2290, 2833, -7908]
var arrayPairSum = function(nums) {
    let a0 = [];
    let b0 = [];
    for(let i = 0;i <nums.length;i++){
        //正数
        if(nums[i]>0){
            a0.push(nums[i])
        }
        //负数
        if(nums[i]<=0){
            b0.push(nums[i])
        }
    }
    
    let b1 = b0.sort();
    // console.log(b1)
    //没有负数
    if(!b1[0]){
        let a1 = nums.sort();
        const chunk = (data, size) =>
            Array.from({ length: Math.ceil(data.length / size) }, (v, i) =>
                data.slice(i * size, i * size + size)
            );
        let a2 = chunk(a1,2);
        let a3 = 0;
        for(let i = 0;i<a2.length;i++){
            a3 = a3 + a2[i][0]
        }
        return a3
    }else{
    
        let m = b1.length;
        const chunk = (data, size) =>
            Array.from({ length: Math.ceil(data.length / size) }, (v, i) =>
                data.slice(i * size, i * size + size)
            );
        let a2 = chunk(a0.sort(),2);
        let a3 = 0;
        for(let i = 0;i<a2.length;i++){
            a3 = a3 + a2[i][0]
        }
        return a3 + b1[m - 1]
    }
    
};
// console.log(arrayPairSum(gh))
//旋转数组 rotate
let nums = [1,2,3,4,5,6,7];
let k = 3;
var rotate = function(nums, k) {
    let na3 = [];
    if(k === 0 || nums.length%k === 0 && k !== 1){
        // console.log("整数倍")
        console.log(nums)
    }else{
        if(k < nums.length){
            // console.log("小于1倍")
            compAnsower(k,nums)
        }else if(k > nums.length){
            let m = k%nums.length
             compAnsower(m,nums)
            // console.log("大于1倍且有余数" )
        }
        
        function compAnsower(n,nums){
            // console.log("移动："+n)
            //直接向后移动
            let na1 = [];
            for(let i = 0 ;i<n + 1;i++){
                na1.push(nums[i])
            }
            // console.log(na1)
            //剩下的部分
            let na2 = [];
            let len = nums.length -1 ;
            for(let i = n -1 ;i > -1;i--){
                na2.push(nums[len-i])
            }
            //合并
            na3 = na2.concat(na1)
        }
       console.log(na3)
    }
};
// console.log(rotate(nums,3))
let adf = function (){
    let a = [1,2]
    let b = [3,4]
    let c = a.concat(b)
   console.log(c) 
}
// adf()
//翻转整数 reverse
let yu = -123
var reverse = function(x) {
    function com(x){
        let a = x.toString()
        let b = [];
        for(let i = a.length -1;i > -1;i--){
            b.push(a[i])
        }
        let c = parseInt(b.join(""));
        if(c >2147483648){
            return 0
        }else{
            return c;
        }
    }
    if(x < 0){
        let d =  -1*x;
        return -1*com(d);
    }else{
        return com(x);
    }
};
