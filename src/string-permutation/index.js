/*
*  Given two strings, write a method to decide if one is a permutation of the other. 
*/

// O (2N)

const isPermutation = (string1, string2) => {
  if (!string1 || !string2) return false;
  if (string1 === string2) return true;

  let sum1 = 0, sum2 = 0;
  for (let index in string1) {
    sum1 += (string1.charAt(index)).charCodeAt();
  }

  for (let index in string2) {
    sum2 += (string2.charAt(index)).charCodeAt();
  }

  return sum1 === sum2;
};

export default isPermutation;