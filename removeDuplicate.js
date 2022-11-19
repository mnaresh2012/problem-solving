/**
 * @param {str[]} str
 * remove duplicate from an array
 */
function removeDuplicate(array) {
	return [... new Set(my_array)]
}

const my_array = ['Naresh', 'Akash', 'Sameer', 'Vikram', 'Santhosh', 'Naresh', 'Akash'];
removeDuplicate(my_array); // ['Naresh', 'Akash', 'Sameer', 'Vikram', 'Santhosh'];

/**
 * @param {str[]} str
 * find the duplicate from an array
 */
function findDuplicate(array) {
	return [...new Set(array.filter((value, index, self) => self.indexOf(value) !== index))]
}
findDuplicate(my_array); // ['Naresh', 'Akash'];