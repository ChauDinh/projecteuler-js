/**
 * Divide and Conquer Sort
 *
 * In this section, we will examine an alternative approach of sorting called Divide and Conquer.
 *
 * Divide the problem into a number of subproblems that are smaller instances of the same problem
 * Conquer the subproblem by solving them recursively
 * Combine the solutions to the subproblems into the solution for the original problem
 */

/**
 * Divide and Conquer in sorting:
 *
 * Divide: Divide the n-element array into two subsequences of n/2 elements each
 * Conquer: Sort the two subsequences recursively using merge sort
 * Combine: Merge the two sorted subsequences to produce the sorted answer
 */

module.exports.MergeSort = arr => {
  if (arr.length === 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(this.MergeSort(left), this.MergeSort(right));
};

function merge(left, right) {
  let result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++;
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}
