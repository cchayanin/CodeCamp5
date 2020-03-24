let user = prompt("คุณคือใคร");

if (user === "Admin") {
  let password = prompt("Password");
  if (password === "codecamp#5") {
    alert("ยินดีต้อนรับ");
  } else if (password === "" || password === null) {
    alert("ยกเลิก");
  } else {
    alert("Wrong password");
  }
} else {
  if (user === "" || user === null) {
    alert("ยกเลิก");
  } else {
    alert("ผมไม่รู้จักคุณ");
  }
}
