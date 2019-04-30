/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
   if(str){
    let m = str.toLocaleLowerCase()
    return m
   }else{
       return
   }
};



/**
 * no.832 toLowerCase & flipAndInvertImage
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    // console.log("输入：" + JSON.stringify(A))
    //翻转
    let reverseA = (A) => {
        let k = A.filter(function(item){
            if(item){
                return item.reverse()
            }
        })

        //反转
        let ans = [] 
       
        let invertA = (dd) => {
            console.log("翻转后：" + JSON.stringify(dd))
            for(let i = 0;i < dd.length;i++){
                let minAns = []
                let ks = dd[i].map(function(item,index,array) {
                    // console.log("map:" + item)
                    if(item == 0){
                        item = 1
                    }else{
                        item = 0
                    }
                    minAns.push(item)
                    return  item
                })
                ans.push(minAns)
            }
             console.log(">> " + ans)
        }
        invertA(A)
        return  ans 
    }
    
    if(A){
     return reverseA (A)
    }
};
let m = [[1,1,0],[1,0,1],[0,0,0]];

console.log("结果：" +JSON.stringify(flipAndInvertImage(m)) )