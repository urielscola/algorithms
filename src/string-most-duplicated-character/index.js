

// O(N)

const mostDuplicatedCharacter = (string) => {
  const hashMap = {};
  let count = 0;

  for (let character of string.trim().toLowerCase()) {
    if (hashMap[character]) {
      hashMap[character]++;
    } else {
      hashMap[character] = 1;
    }

    if (hashMap[character] > count) count = hashMap[character];
  }

  return count;
};

export default mostDuplicatedCharacter;