/*
*  Given two strings, write a method to decide if one is a permutation of the other. 
*/

// O (N + n log N) === O(N)

const isPermutation = (string1, string2) => {
  if (!string1 || !string2) return false;
  if (string1.length !== string2.length) return false;
  if (string1 === string2) return true;

  const characterMap = {};

  for (let i = 0; i < string1.length; i++) {
    const character = string1.charAt(i).toLowerCase();

    if (characterMap[character]) {
      characterMap[character]++
    } else {
      characterMap[character] = 1;
    }
  }

  for (let i = 0; i < string2.length; i++) {
    const character = string2.charAt(i).toLowerCase();

    if (!characterMap[character]) break;

    characterMap[character]--;
    if (characterMap[character] < 1) {
      delete characterMap[character];
    }
    
  }

  return Object.keys(characterMap).length === 0;
};

export default isPermutation;