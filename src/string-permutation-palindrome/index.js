/* 
* Given a string, determine if a permutation of the string could form a palindrome.
*/

const stringPermutationCanFormPalindrome = (string) => {
  const characterHashMap = {};

  for (let i = 0; i < string.length; i++) {
    const key = string.charAt(i);
    if (characterHashMap[key]) {
      characterHashMap[key]++;
    } else {
      characterHashMap[key] = 1;
    }
  }

  const characters = Object.keys(characterHashMap);

  let count = 0;
  for (let i = 0; i < characters.length; i++) {
    if (count > 1) break;
    count += characterHashMap[characters[i]] % 2;
  }
  return count < 2;

};

export default stringPermutationCanFormPalindrome;