/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
	const comp = new Map();
    for(let i = 0; i < nums.length; i++) {
        if(comp[nums[i]] >= 0) {
            return [comp[nums[i]], i];
        }
        comp[target - nums[i]] = i;
    }
    return []
}

const numbers = [2, 8, 7, 11, 15];
console.log(twoSum(numbers, 9)); // [0, 2]

const numbers = [8, 6, 4, 2, 15, 7];
console.log(twoSum(numbers, 9)); // [3, 5]

