// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 2

function fib(n) {
  const arr = [0, 1];
  let last = 0;
  let actual = 1;
  let temp = 0;

  for (let index = 0; index < n; index++) {
    temp = last + actual;

    arr.push(temp);
    last = actual;
    actual = temp;
  }

  return arr[n];
}

export default fib;
