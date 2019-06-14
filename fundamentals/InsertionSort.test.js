const InsertionSort = require("./InsertionSort");

describe("Return sorted array", () => {
  it("sorts an array of numbers in non-decreasing order", () => {
    let expected = [1, 2, 3];
    let actual = InsertionSort.InsertionSort([3, 2, 1]);
    expect(actual).toEqual(expected);

    expected = [-1, 0, 1, 2, 3];
    actual = InsertionSort.InsertionSort([3, 2, 1, 0, -1]);
    expect(actual).toEqual(expected);

    expected = [-5, -1, 2, 3, 10, 20];
    actual = InsertionSort.InsertionSort([3, 2, -1, 20, -5, 10]);
    expect(actual).toEqual(expected);
  });

  it("sorts an array of numbers in non-increasing order", () => {
    let expected = [3, 2, 1];
    let actual = InsertionSort.InsertionSortDecrease([1, 2, 3]);
    expect(actual).toEqual(expected);
  });

  it("linear search a given number in array", () => {
    let expected = 1;
    let actual = InsertionSort.LinearSearch([1, 2, 3, 4], 2);
    expect(actual).toEqual(expected);

    expected = 0;
    actual = InsertionSort.LinearSearch([0, 0, 0, 2], 0);
    expect(actual).toEqual(expected);
  });

  it("find the maximum value of an array", () => {
    let expected = 7;
    let actual = InsertionSort.FindMaxOfSequence([1, 0, -2, 7]);
    expect(actual).toEqual(expected);

    expected = -10;
    actual = InsertionSort.FindMaxOfSequence([
      -10000,
      -11,
      -11,
      -11,
      -11,
      -11,
      -10
    ]);
    expect(actual).toEqual(expected);

    expected = 1000;
    actual = InsertionSort.FindMaxOfSequence([0, 0, 0, 19, -10000, 100, 1000]);
    expect(actual).toEqual(expected);
  });
});
