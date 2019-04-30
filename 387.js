/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    if( s == ''){
        return -1
    }else if(s.length == 1 ){
        return 0
    }else{
        let letArr = []
        for(let t =0;t < s.length; t++){
            letArr.push(s[t])
        }

        let testAfter = letArr
        for(let i =0  ;i < s.length ;i++){
            testAfter.splice(i,1)
            console.log(testAfter)
            let k = testAfter.indexOf(s[i])
            if(k == -1){
                return i
            }else{
                testAfter.splice(i,0,s[i])
            }
        }
        return -1
    }
    
};
let a =  "adaccdcda"
console.log(firstUniqChar(a))
