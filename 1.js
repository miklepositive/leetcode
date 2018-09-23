/**
 * Task: #1 Leetcode
 * Time: spent 20 min
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 *
 Given an array of integers, return indices of the two numbers such
 that they add up to a specific target.

 You may assume that each input would have exactly one solution,
 and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
 */

var twoSum = function(nums, target) {
  var arrayNumbers = [];
  var areNumbersFound = false;
  for (var i = 0; i < nums.length && !areNumbersFound; i++) {
    for (var j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        arrayNumbers.push(nums[i]);
        arrayNumbers.push(nums[j]);
        areNumbersFound = true;
        break;
      }
    }
  }
  return arrayNumbers;
};

var testArray = [1, 2, 5, 11, 23];
var target = 7;
var testArray1 = [5, 3, 17, 11, 32, 2];
var target1 = 13;

console.log(twoSum(testArray, target));
console.log(twoSum(testArray1, target1));