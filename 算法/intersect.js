// 613
/* 
intersect

*/
var intersect = function(nums1, nums2) {
    if(nums1.length == 0 || nums2.length == 0){
        return []
    }else{
        //去重
        let ra1 = []
        ra1 = nums1.filter(function(item){
             return ra1.includes(item) ? '' : ra1.push(item);
         });
         let ra2 = []
          ra2 = nums2.filter(function(item){
             return ra2.includes(item) ? '' : ra2.push(item);
         });
        //存在并且不相等
        if(ra1.length > 0 && ra2.length > 0 && ra2.length !== ra1.length){
            
            let shortLen = (ra1.length > ra2.length) ? ra2.length : ra1.length;
            let longLen = (ra1.length > ra2.length) ? ra1.length : ra2.length;

            if(longLen == ra2.length){
                //先过滤一道重复的
                let shortArry = ra1;
                let ra = []
                ra = shortArry.filter(function(item){
                    return ra.includes(item) ? '' : ra.push(item);
                });
                console.log(ra)
                let resoult = ra.filter(function(item,index,array){
                    for(let i = 0;i<longLen;i++){
                        if(ra2[i] == item){
                            return item
                        }
                    }
                })
                return resoult
            }else if(longLen == ra1.length){
                //先过滤一道重复的
                let shortArry = ra2;
                let ra = []
                ra = shortArry.filter(function(item){
                    return ra.includes(item) ? '' : ra.push(item);
                });

                console.log(ra)
                let resoult = ra.filter(function(item,index,array){
                    for(let i = 0;i<longLen;i++){
                        if(ra1[i] == item){
                            return item
                        }
                    }
                })
                return resoult
            }
        //存在并且相等
        }else if(ra1.length > 0 && ra2.length > 0 && ra2.length == ra1.length){
           
            return ra1 
        }
    }
    
};
let n = [0,0,1,1,1,2,2,3,3,4]
