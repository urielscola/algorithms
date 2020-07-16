/*
* Implement an algorithm to determine if a string has all unique characters.
*/

// O (log n)

const stringHasOnlyUniqueChars = (string) => {
  let onlyUnique = true;
  const charactersInString = {};
  const length = string.length;

  for (let i = 0; i < length && onlyUnique; i++) {
    const key = string.charAt(i).toLowerCase();
    if (charactersInString[key]) {
      onlyUnique = false;
    } else {
      charactersInString[key] = true;
    }
  }

  return onlyUnique;
}

export default stringHasOnlyUniqueChars;