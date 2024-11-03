/*

  Implement a radix sort in a function called radixSort.

  You'll probably need several functions

  You can implement it using a binary or decimal based bucketing but I'd recommend the decimal based buckets because
  it ends up being a lot more simple to implement.

*/

function radixSort(array) {
  // code goes here

  let result = array;
  const largest_num = Math.max(...result);
  const largest_num_length = largest_num.toString().length;

  for (let i = 1; i <= largest_num_length; i++) {
    let buckets = Array(10)
      .fill()
      .map((el) => []);
    for (let item of result) {
      let num = item.toString();
      let face_value = num[num.length - i];

      if (face_value == undefined) {
        face_value = 0;
      }
      let index = Number(face_value);

      buckets[index].push(item);
    }
    result = buckets.flat();
  }

  return result;
}

// unit tests
// do not modify the below code
describe("radix sort", function () {
  it("should sort correctly", () => {
    const nums = [
      20, 51, 3, 801, 415, 62, 4, 17, 19, 11, 1, 100, 1244, 104, 944, 854, 34,
      3000, 3001, 1200, 633,
    ];
    const ans = radixSort(nums);
    expect(ans).toEqual([
      1, 3, 4, 11, 17, 19, 20, 34, 51, 62, 100, 104, 415, 633, 801, 854, 944,
      1200, 1244, 3000, 3001,
    ]);
  });
  it("should sort 99 random numbers correctly", () => {
    const fill = 99;
    const nums = new Array(fill)
      .fill()
      .map(() => Math.floor(Math.random() * 500000));
    const ans = radixSort(nums);
    expect(ans).toEqual(nums.sort());
  });
});
