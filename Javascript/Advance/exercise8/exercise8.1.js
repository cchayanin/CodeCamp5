// 1. เขียนฟังก์ชัน ucFirst(string) โดยทำคืนค่าเป็น string เดิม แต่ตัวแรกของ string กลายเป็นพิมพ์ใหญ่

function ucFirst(string) {
  return string[0].toUpperCase() + string.substring(1);
}

console.log(ucFirst("hello"));
console.log(ucFirst("nice"));
