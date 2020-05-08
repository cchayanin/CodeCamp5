function setTimeoutAndLog(input, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(input);
      resolve();
    }, time);
  });
}

setTimeoutAndLog("A", 1000)
  .then(() => setTimeoutAndLog("B", 1000))
  .then(() => setTimeoutAndLog("C", 1000))
  .then(() => setTimeoutAndLog("D", 1000));
