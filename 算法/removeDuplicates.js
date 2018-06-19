//removeDuplicates
var removeDuplicates = function(nums) {
   
    if(nums){
        let a = []
        a = nums.filter(function(item,index,array){
            if(item){
                return item +1 ;
            }
            
        });
        console.log(a)
        // for(let i = 0;i<nums.length;i++){
        //     if(nums[i] == nums[i+1]){

        //     }
        // }
    }

};
removeDuplicates(n)