const InsertionSort = require("./InsertionSort");

describe("Return sorted array", () => {
  it("sorts an array of numbers", () => {
    let expected = [1, 2, 3];
    let actual = InsertionSort([3, 2, 1]);
    expect(actual).toEqual(expected);

    expected = [-1, 0, 1, 2, 3];
    actual = InsertionSort([3, 2, 1, 0, -1]);
    expect(actual).toEqual(expected);

    expected = [-5, -1, 2, 3, 10, 20];
    actual = InsertionSort([3, 2, -1, 20, -5, 10]);
    expect(actual).toEqual(expected);
  });
});
