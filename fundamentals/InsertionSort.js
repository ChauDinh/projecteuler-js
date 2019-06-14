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
