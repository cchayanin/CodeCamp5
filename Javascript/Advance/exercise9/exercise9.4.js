// 4. Maximal contiguous subarray (**Optional**)
// ให้เขียนฟังก์ชัน getMaxSubSum(arr) ที่ return ผลรวมของ subarray ที่มากที่สุดที่ติดกัน

// getMaxSubSum([-1, 2, 3, -9]) == 5 (the sum of highlighted items)
// getMaxSubSum([2, -1, 2, 3, -9]) == 6
// getMaxSubSum([-1, 2, 3, -9, 11]) == 11
// getMaxSubSum([-2, -1, 1, 2]) == 3
// getMaxSubSum([100, -9, 2, -3, 5]) == 100
// getMaxSubSum([1, 2, 3]) == 6 (take all)

// from Solution
function getMaxSubSum(arr) {
  let subSum = 0;
  let maxValue = 0;
  for (let value of arr) {
    subSum += value;
    maxValue = Math.max(maxValue, subSum);
    if (subSum < 0) subSum = 0;
  }
  return maxValue;
}

// My Code without Math.max
// function getMaxSubSum(arr) {
//   let sum = 0;
//   let tmp = -Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     sum = 0;
//     if (tmp < arr[i]) tmp = arr[i];

//     for (let j = i; j < arr.length; j++) {
//       sum += arr[j];
//       if (tmp < sum) tmp = sum;
//     }
//   }

//   return tmp;
// }

console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([2, -1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([-2, -1, 1, 2]));
console.log(getMaxSubSum([100, -9, 2, -3, 5]));
console.log(getMaxSubSum([1, 2, 3]));
