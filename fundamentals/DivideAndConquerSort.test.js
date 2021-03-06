const DivideAndConquerSort = require("./DivideAndConquerSort");

describe("Return a sorted array", () => {
  it("sorts an array of numbers in non-decreasing order", () => {
    let expected = [-4, 0, 1, 2, 3, 10, 55];
    let actual = DivideAndConquerSort.MergeSort([0, 1, 2, 3, -4, 55, 10], 0, 6);
    expect(actual).toEqual(expected);

    expected = [0, 0, 0, 0, 0, 0, 0, 100];
    actual = DivideAndConquerSort.MergeSort([0, 0, 0, 100, 0, 0, 0, 0], 0, 7);
    expect(actual).toEqual(expected);

    expected = [
      -10,
      -9,
      -8,
      -7,
      -6,
      -5,
      -4,
      -3,
      -2,
      -1,
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      7,
      7
    ];
    actual = DivideAndConquerSort.MergeSort(
      [-7, 7, 7, 7, -10, 0, -1, 1, -9, -8, -6, 6, 5, -5, -4, 4, 3, -3, 2, -2],
      0,
      19
    );
    expect(actual).toEqual(expected);
  });

  it("sort and array by using recursive insertion sort", () => {
    let expected = [0, 1, 2, 3, 4, 5, 5, 5];
    let actual = DivideAndConquerSort.InsertionSortWithRecursion(
      [0, 4, 5, 1, 3, 2, 5, 5],
      7
    );
    expect(actual).toEqual(expected);

    expected = [-10, -10, -10, -5, -5, 0, 5, 5, 5, 6];
    actual = DivideAndConquerSort.InsertionSortWithRecursion(
      [0, 5, 5, 5, -5, -5, 6, -10, -10, -10],
      9
    );
    expect(actual).toEqual(expected);
  });

  it("search a value by using recursive binary search algorithm", () => {
    let expected = 6;
    let actual = DivideAndConquerSort.BinarySearchWithRecursion(
      [1, 2, 3, 4, 5, 6, 7],
      0,
      6,
      7
    );
    expect(actual).toEqual(expected);

    expected = 4 && 5;
    actual = DivideAndConquerSort.BinarySearchWithRecursion(
      [-10, -5, -5, 0, 5, 5, 8, 9],
      0,
      7,
      5
    );
    expect(actual).toEqual(expected);

    expected = 5;
    actual = DivideAndConquerSort.BinarySearchWithRecursion(
      [-1, -0, 0, 1, 2, 4],
      0,
      5,
      4
    );
    expect(actual).toEqual(expected);
  });

  it("sort an array using insertion sort with binary search algorithm", () => {
    let expected = [-1, 0, 1, 2];
    let actual = DivideAndConquerSort.InsertionSortWithBinarySearch([
      0,
      1,
      2,
      -1
    ]);
    expect(actual).toEqual(expected);

    expected = [-10, -8, -6, -4, -2, 0, 1, 3, 5, 7, 9];
    actual = DivideAndConquerSort.InsertionSortWithBinarySearch([
      9,
      -8,
      -6,
      3,
      5,
      -10,
      7,
      -4,
      -2,
      1,
      0
    ]);
    expect(actual).toEqual(expected);

    expected = [0, 0, 0, 0, 0, 0, 1];
    actual = DivideAndConquerSort.InsertionSortWithBinarySearch([
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ]);
  });
});
