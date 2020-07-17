/*
* Write a method to replace all spaces in a string with '%20: You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string.
*/

const urlify = (string) => {
  let characters = string.trim().split('');

  for (let i = 0; i < characters.length; i++) {
    if (characters[i] === ' ') characters[i] = '%20';
  }

  return characters.join('');
};

export default urlify;