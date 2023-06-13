/*
 * Title: Math Library
 * Description: Utility library for math-related functions
 * Author: sakib ahmed
 * Date: 11/09/19
 *
 */

//Math object -Module scaffolding
const math = {};

//get a random integer between two integers

math.getRandomNumber = function getRandomNumber(min, max) {
  let minimum = min;
  let maximum = max;

  minimum = typeof minimum === "number" ? minimum : 0;
  maximum = typeof maximum === "number" ? maximum : 0;
  return Math.floor(Math.random() * (maximum - minimum + 1) + min);
};
//export the library
module.exports = math;
