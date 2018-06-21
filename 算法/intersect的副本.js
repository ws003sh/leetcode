//intersect   两个数组的交集 II
let nums1 = [1, 2, 2, 1], 
    nums2 = [2]
var intersect = function(nums1, nums2) {
    const intersection = (a, b) => {
          const s = new Set(b);
          return a.filter(x => s.has(x));
        };
        intersection(nums1, nums2)

    const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));
    return filterNonUnique([1,1,2,2])
       
  };
  console.log(intersect(nums1,nums2))
