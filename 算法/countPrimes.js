// var countPrimes = function(n) {
//     if(n == 0 || n == 1 || n == 2){
//         return 0
//     }else{
//        let arr = 0
//        for(let i = 1;i< n;i++){
//         sad(i)
//        }
//        function sad(num){
//         if(num <= 10){
//             // console.log(num)
//             let res = 0;
//             for(let i = 1;i <= num;i++){
//                 if(num % i == 0){
//                     res ++ 
//                 }
//             }
//             if(res == 2){
//                 arr++
//                 return
//             }
//         }else if(num > 10){
//             if(num % 2 == 0 || num % 3 == 0 || num % 4 == 0 || num % 5 == 0 ||  num % 6 == 0 ||  num % 7 == 0 ||  num % 8 == 0 ||  num % 9 == 0 ||num % 10 == 0){
                
//             } else{
//                 let res = 0;
//                 for(let i = 1;i <= num;i++){
//                     if(num % i == 0){
//                         res ++ 
//                     }
//                 }
//                 if(res == 2){
//                     arr++
//                     return
//                 }
//             }
//         }
//     }
//        return arr
//     }
// };


var countPrimes = function(n) {  
    // Prime Numbers within 10   
    // 2 3 5 7 9  
    if(n <= 1) {  
        return 0;  
    }  
      
    // 排除法，找到质数，排除其所有的倍数  
    var exclude = [];  
    for(var i=2;i<n;i++) {  
        var k=2;  
        while( i*k < n) {  
            if(!exclude[i*k]) {  
                exclude[i*k] = true;  
            }  
            k++;  
        }  
    }  
      
    // 搜索1~n排除后剩下的数据  
    var ans = 0;  
    for (var p = 2; p < n; p++) {  
        if (!exclude[p]) {  
            ans++;  
        }  
    }  
  
    return ans;  
};
var beginTime = +new Date();
console.log("计算开始")
console.log(countPrimes(9999))
var endTime = +new Date();
console.log("计算用时共计"+(endTime-beginTime)+"ms");