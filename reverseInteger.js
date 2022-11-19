/**
 * @param {Integer} num
 * reverse the Integer
 */
function reverseInteger(num) {
	return parseInt(num.toString().split('').reverse().join(''));
}

let my_integer = 6756789;
reverseInteger(my_integer); //9876576