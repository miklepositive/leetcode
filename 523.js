/**
 * Task: #523 Leetcode
 * Time: spent 3 hours
 * @param {number[]} nums
 * @return {number}
 *
Given a sorted array consisting of only integers where
every element appears twice except for one element which
appears once. Find this single element that appears only once.

Example 1:

Input: [1,1,2,3,3,4,4,8,8]
Output: 2

Example 2:

Input: [3,3,7,7,10,11,11]
Output: 10
Note: Your solution should run in O(log n) time and O(1) space.
 */
var singleNonDuplicate = function(nums) {
  var single = 777;
  var flag = false;
  for (var i = 0; i < nums.length && !flag; i++) {
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

// for testing
var array = [2, 2, 1, 3, 3, 10, 10, 2, 1, 2, 13];
var array1 = [1, 2, 2, 3, 3, 6, 6];
var array2 = [2, 2, 7, 3, 3, 6, 6];
console.log(singleNonDuplicate(array));
console.log(singleNonDuplicate(array1));
console.log(singleNonDuplicate(array2));
