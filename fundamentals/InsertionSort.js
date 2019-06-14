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

console.log(this.LinearSearch([1, 2, 3, 4], 2));

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
