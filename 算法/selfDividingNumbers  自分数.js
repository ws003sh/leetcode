//6.12
/* 
selfDividingNumbers  自分数

*/
var selfDividingNumbers = function(left, right) {
    let star = left;
    let end = right;
    let r1 = [];
    for(let i = star;i < end + 1;i++){
        if(i%10 === 0){
           
        }else{
            r1.push(i);
        }
    }
    let res = r1.filter(function (item,index,array){
        let m = "";
        if(item > 9){
            m = item.toString().split("")
            let o = m.length;
            for(let i = 0;i < m.length;i++){
                if(item % m[i] === 0){
                    o--
                }
            }
            if( o == 0){
                return item
            }else{
            }
        }else if(item <= 9){
            return item
        }
    })
    return res
};
// selfDividingNumbers(1,22)

