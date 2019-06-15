// Given a random array including n elements. Return this array in non-decrement order.

// There are several sort method for us to deal with, in this section, we will focus on Insertion Sort, very basic and fundamentals. For more information, please check the book called "Introduction to Algorithms, 3rd edition" of MIT publishcation.

module.exports.InsertionSort = arr => {
  if (arr.length === 0) {
    return `We don't need to sort this array`;
  }

  for (let j = 1; j < arr.length; j++) {
    let key = arr[j];
    let i = j - 1;
    while (i >= 0 && arr[i] > key) {
      arr[i + 1] = arr[i];
      i = i - 1;
    }

    arr[i + 1] = key;
  }

  return arr;
};

module.exports.InsertionSortDecrease = arr => {
  if (arr.length === 0) {
    return `We don't need to sort this array`;
  }

  for (let j = 1; j < arr.length; j++) {
    let key = arr[j];
    let i = j - 1;
    while (i >= 0 && arr[i] < key) {
      arr[i + 1] = arr[i];
      i = i - 1;
    }
    arr[i + 1] = key;
  }

  return arr;
};

/**
 * Consider the Searching Problem:
 * Input: A sequence of n numbers Array = [1, 2, 3, ..., n] and a value X
 * Output: An index i such that X = Array[i] or the special value NIL if v does not appear in Array.
 * Write code for linear search (O(n)), and make sure that your loop invariant fulfills the three necessary properties.
 */

module.exports.LinearSearch = (arr, n) => {
  if (arr.length === 0) {
    return `The array is empty, so we can not search`;
  }

  for (let j = 0; j < arr.length; j++) {
    let key = arr[j];
    if (key === n) {
      return j;
    }
  }
  return `NIL`;
};

/**
 * Consider the Finding Maximum/Minimum Problem
 * Input: A sequence of n numbers Array = [1, 2, 3, ..., n];
 * Output: The maximum value of the array or its index
 * Write a function returns maximum in linear time O(n)
 * Idea: we will sort the array in non-decreasing order and return the last element of the array
 */

module.exports.FindMaxOfSequence = arr => {
  if (arr.length === 0) {
    return `The array is empty so maximum is undefined!`;
  }

  for (let j = 1; j < arr.length; j++) {
    let key = arr[j];
    let i = j - 1;
    while (i >= 0 && arr[i] > key) {
      arr[i + 1] = arr[i];
      i = i - 1;
    }
    arr[i + 1] = key;
  }
  return arr[arr.length - 1];
};

// The minimum value is the same, we need to return the first element of the sorted array.

/**Analysis
 *
 * In the CLRS book, they advise we should show off three things about loop invariant:
 * Initialization - it is true prior to the first interation of the loop
 * Maintainance - if it is true before an interation then it remains true before the next interation
 * And Termination - when the loop terminates, the invariant gives us a useful property helping show that the algorithm is true.
 */

// In particular, unlike mathematical induction, loop invariant have termination to stop the "induction" when the loop terminates.

/**
 * Consider problem: Adding two n-bit binary integers, stored in two n-element arrays A and B.
 * The sum of two integers should be stored in binary form in an (n+1)-element array C.
 * State the problem formally and write a function for adding two integers.
 */

module.exports.AddTwoInteger = (A, B) => {
  if (A.length !== B.length) {
    return `Oops! The length of two arrays must be equal`;
  }

  let length = A.length;
  let C = [];
  let carry = 0;

  for (let i = length - 1; i >= 0; i--) {
    C[i + 1] = (A[i] + B[i] + carry) % 2;
    carry = Math.floor((A[i] + B[i] + carry) / 2);
  }

  C[0] = carry;

  return C;
};
