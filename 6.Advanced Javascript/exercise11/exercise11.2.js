// 2. Anagram เป็นตัวอักษรที่มีจำนวนตัวอักษรแต่ละตัวที่เท่ากัน แต่เรียงไม่เหมือนกัน ( Optional )

// nap - pan
// ear - are - era
// cheaters - hectares - teachers

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"

function aclean(arr) {
  let result = arr;
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j < arr.length; j++) {
      if (
        i != j &&
        arr[i]
          .toUpperCase()
          .split("")
          .sort()
          .join("") ==
          arr[j]
            .toUpperCase()
            .split("")
            .sort()
            .join("")
      ) {
        result.splice(i, 1);
        break;
      }
    }
  }
  return result;
}
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));
