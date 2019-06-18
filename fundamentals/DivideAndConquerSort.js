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

function Merge(arr, p, q, r) {
  let n1 = q - p + 1;
  let n2 = r - q;
  let left = new Array(n1),
    right = new Array(n2);

  for (let i = 0; i < n1; i++) {
    left[i] = arr[p + i];
  }

  for (let j = 0; j < n2; j++) {
    right[j] = arr[q + j + 1];
  }

  left[n1] = Infinity;
  right[n2] = Infinity;

  let i = 0,
    j = 0;
  for (let k = p; k <= r; k++) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
  }
}

module.exports.MergeSort = (arr, p, r) => {
  if (p < r) {
    let q = Math.floor((p + r) / 2);
    this.MergeSort(arr, p, q);
    this.MergeSort(arr, q + 1, r);
    Merge(arr, p, q, r);
  }

  return arr;
};
