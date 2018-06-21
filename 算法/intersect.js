//两个数组的交集 II
var intersect = function(nums1, nums2) {
   
    if(nums1 == [] || nums2 == []){
        return []
    }else{
        let a = (nums1.length > nums2.length) ? nums1 : nums2
        let b = (nums1.length < nums2.length) ? nums1 : nums2

        const intersection = (a, b) => {
            const s = new Set(b);
            return a.filter(x => s.has(x));
          };
          return intersection(a, b)
    }
};
console.log(intersect([1, 2, 2, 1], [2]))
