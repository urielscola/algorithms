// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(4)
//       '    #    '
//       '   ###   '
//       '  #####  '
//       '#########'

function pyramid(n) {
  const columns = n * 2 - 1;
  const rows = n;
  let numberOfCharacters = 1;

  for (let index = 1; index <= rows; index++) {
    const blankSpace = columns - numberOfCharacters;
    const blankSideSpace =
      blankSpace > 0 ? new Array(blankSpace / 2).fill(' ').join('') : '';
    const characters = new Array(numberOfCharacters).fill('#').join('');

    numberOfCharacters += 2;
    console.log(blankSideSpace + characters + blankSideSpace);
  }
}

export default pyramid;
