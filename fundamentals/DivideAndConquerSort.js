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

// Can we rewrite the Merge Sort without using the sentinels L[n+1] and R[n+1]?
// The answer is yes and this is a problem in CLRS book

/**
 * Insertion sort with recursive idea
 * We can express the insertion sort as a recursive procedure as we recursively sort A[1, n-1] and then insert A[n] into the sorted array.
 *
 * It tooks T(n) = T(n-1) + O(n) times when n > 1, and when n = 1, the time is a constant
 *
 *
 */

function Insert(arr, k) {
  let key = arr[k];
  let index = k - 1;
  while (index >= 0 && arr[index] > key) {
    arr[index + 1] = arr[index];
    index--;
  }
  arr[index + 1] = key;
}

module.exports.InsertionSortWithRecursion = (arr, n) => {
  if (n > 1) {
    this.InsertionSortWithRecursion(arr, n - 1);
    Insert(arr, n);
  }
  return arr;
};

/**
 * More with recursion
 *
 * Refering back to the search problem in insertion sort, if the array is sorted, we can eliminate half of the sequence from further consideration.
 *
 * The binary search algorithm repeat this procedure.
 *
 * The best case is when the value we need to find near the smallest element
 * The worst-case is when the value we need to find near the largest element
 */

module.exports.BinarySearchWithRecursion = (arr, p, r, search) => {
  if (p > r) {
    return `NIL`;
  }
  let q = Math.floor((p + r) / 2);
  if (search == arr[q]) {
    return q;
  } else if (search < arr[q]) {
    return this.BinarySearchWithRecursion(arr, p, q - 1, search);
  } else if (search > arr[q]) {
    return this.BinarySearchWithRecursion(arr, q + 1, r, search);
  }
};
