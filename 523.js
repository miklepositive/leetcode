/**
 * #523 Leetcode
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  var single = 777;
  var flag = false;
  for (var i = 0; i < nums.length; i++) {
    if (flag) {
      break;
    }
    for (var j = 0; j < nums.length; j++) {
      if (i == j) {
        continue;
      } else if (nums[i] == nums[j]) {
        flag = false;
        break;
      } else {
        flag = true;
        single = nums[i];
      }
    }
  }
  return single;
};

var array = [2, 2, 1, 3, 3, 10, 10, 2, 1, 2, 13];
var array1 = [1, 2, 2, 3, 3, 6, 6];
console.log(singleNonDuplicate(array));
console.log(singleNonDuplicate(array1));
