const maxSubArray = require("./MaximumSubArray");

describe("Return a maximum subarray", () => {
  it("return a maximum subarray", () => {
    let expected = {
      low: 0,
      high: 2,
      sum: 6
    };
    let actual = maxSubArray.findMaxSubarray([1, 2, 3], 0, 2);
    expect(actual).toEqual(expected);

    expected = {
      low: 0,
      high: 0,
      sum: 1000
    };
    actual = maxSubArray.findMaxSubarray([1000], 0, 0);
    expect(actual).toEqual(expected);

    expected = {
      low: 1,
      high: 5,
      sum: 16
    };
    actual = maxSubArray.findMaxSubarray([-1, 2, 3, -4, 5, 10], 0, 5);
    expect(actual).toEqual(expected);
  });
});
