/**
 * @param {str[]} str
 * reverse the string
 */
 function reverseString(str) {
    return str.split('').reverse().join('');
 }

const my_string = 'Hello World!';
reverseString(my_string); //output - '!dlroW olleH'