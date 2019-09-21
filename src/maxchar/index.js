// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const map = {};
  let max = 0;

  str.split('').forEach(char => {
    if (!char) return;
    if (map[char]) {
      map[char]++;
    } else {
      map[char] = 1;
    }

    if (max < map[char]) max = map[char];
  });

  for (let prop in map) {
    if (map[prop] === max) return prop;
  }
}

export default maxChar;
