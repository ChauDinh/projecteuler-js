// This section inspired from Chapter 4. Divide and Conquer in CLRS book

/**
 * Divide: the problem into a number of subproblems that are smaller instances of the same problem.
 *
 * Conquer: the subproblems by solving them recursively. If the subproblem sizes are small enough, however, just solve the subproblems in a strainghtforward maner.
 *
 * Combine: the solutions to the subproblems into the solution for the original problem.
 *
 */
/**
 * Notes:
 *
 * We call that the recursive case when the subproblems are large enough to solve recursively.
 *
 * When subproblems are no longer recursed, we say that the recursion "bottom out" and that we have gotten down to the basecase.
 */

/**
 * Recurrences (checking the markdown file)
 */

/**
 * The maximum-subarray problem
 *
 */

const findingMaxCrossingSubarray = (arr, low, mid, high) => {
  let left = -Infinity;
  let sum = 0;
  let maxLeft, maxRight;

  for (let i = mid; i >= low; i--) {
    sum = sum + arr[i];
    if (sum > left) {
      left = sum;
      maxLeft = i;
    }
  }

  let right = -Infinity;
  let sum2 = 0;
  for (let j = mid + 1; j <= high; j++) {
    sum2 = sum2 + arr[j];
    if (sum2 > right) {
      right = sum2;
      maxRight = j;
    }
  }

  return {
    low: maxLeft,
    high: maxRight,
    sum: left + right
  };
};

module.exports.findMaxSubarray = (arr, low, high) => {
  if (low === high) {
    return { low: low, high: high, sum: arr[low] };
  } else {
    let mid = Math.floor((low + high) / 2);
    let leftResult = this.findMaxSubarray(arr, low, mid);
    let rightResult = this.findMaxSubarray(arr, mid + 1, high);
    let crossResult = findingMaxCrossingSubarray(arr, low, mid, high);
    if (
      leftResult.sum >= rightResult.sum &&
      leftResult.sum >= crossResult.sum
    ) {
      return leftResult;
    } else if (
      rightResult.sum >= leftResult.sum &&
      rightResult.sum >= crossResult.sum
    ) {
      return rightResult;
    } else {
      return crossResult;
    }
  }
};

console.log(this.findMaxSubarray([1, 2, 3], 0, 2));
