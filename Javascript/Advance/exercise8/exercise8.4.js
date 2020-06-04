// 4. เขียนฟังก์ชันที่ extractCurrencyValue(string, rate) โดยที่ฟังก์ชันดังกล่าวจะแปลง string ที่เป็นค่าเงิน dollar ให้เป็น number ที่มีค่าเป็นเงินบาทไทย โดยอ้างอิง  rate จาก parameters ตัวที่สอง ที่ส่งมาให้
// alert( extractCurrencyValue('$120', 30.5) === 3660 ); // true

function extractCurrencyValue(string, rate) {
  if (isNaN(parseFloat(string))) string = string.substr(1);
  return parseFloat(string) * rate;
}
console.log(extractCurrencyValue("$120", 30.5) === 3660);

console.log(extractCurrencyValue("120$", 30.5) === 3660);
