//getSum 求和 
var getSum = function(a, b) {
    if(a !== undefined && b !== undefined){
       let re = 0;
       if(a > 0){
            for(let i = 0;i< a ;i++){
                re ++
            }
       }else if(a < 0){
            for(let i = a;i < 0 ;i ++ ){
                re --
            }
       }else{
           
       }
       if(b > 0){
            for(let i = 0;i< b ;i++){
                re ++
            }
       }else if(b < 0){
            for(let i = b;i < 0 ;i ++ ){
                re --
            }
       }else{
            
       }
        console.log(re)
       return re
    }else{
        return
    }
};
getSum(-1,-2)