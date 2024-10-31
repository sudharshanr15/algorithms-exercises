/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const mergeSort = (nums) => {
  // code goes here
  if (nums.length <= 1) {
    return nums;
  }

  let center_index = Math.floor(nums.length / 2);
  let sortedArr1 = mergeSort(nums.slice(0, center_index));
  let sortedArr2 = mergeSort(nums.slice(center_index));

  return merge(sortedArr1, sortedArr2);
};

const merge = (sortedArr1, sortedArr2) => {
  // return one sorted array
  let result = [];

  while (sortedArr1.length && sortedArr2.length) {
    if (sortedArr1[0] > sortedArr2[0]) {
      result.push(sortedArr2.shift());
    } else {
      result.push(sortedArr1.shift());
    }
  }

  return result.concat(sortedArr1, sortedArr2);
};

// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
