/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums.length === 1 && target > nums[0]) {
            return 1;
        }
        if (nums[i] === target) {
            return i;
        } else if (target > nums[i] && target < nums[i + 1]) {
            return i + 1;
        } else if (target > nums[nums.length - 1]) {
            return nums.length;
        } else if (target < nums[0] && target < nums[i]) {
            return 0;
        }
    }
};

console.log(searchInsert([1,3,5,6], 5));
