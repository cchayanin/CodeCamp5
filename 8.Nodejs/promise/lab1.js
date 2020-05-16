function setTimeoutAndLog(input) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(input);
      resolve();
    }, 1000);
  });
}

setTimeoutAndLog("A")
  .then(() => setTimeoutAndLog("B"))
  .then(() => setTimeoutAndLog("C"))
  .then(() => setTimeoutAndLog("D"));
