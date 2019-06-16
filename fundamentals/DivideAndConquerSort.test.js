const DivideAndConquerSort = require("./DivideAndConquerSort");

describe("Return a sorted array", () => {
  it("sorts an array of numbers in non-decreasing order", () => {
    let expected = [-4, 0, 1, 2, 3, 10, 55];
    let actual = DivideAndConquerSort.MergeSort([0, 1, 2, 3, -4, 55, 10]);
    expect(actual).toEqual(expected);

    expected = [0, 0, 0, 0, 0, 0, 0, 100];
    actual = DivideAndConquerSort.MergeSort([0, 0, 0, 100, 0, 0, 0, 0]);
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
    actual = DivideAndConquerSort.MergeSort([
      -7,
      7,
      7,
      7,
      -10,
      0,
      -1,
      1,
      -9,
      -8,
      -6,
      6,
      5,
      -5,
      -4,
      4,
      3,
      -3,
      2,
      -2
    ]);
    expect(actual).toEqual(expected);
  });
});
