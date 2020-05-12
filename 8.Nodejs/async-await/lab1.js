function setTimeoutAndLog(input, millisec) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log(input);
      resolve();
    }, millisec);
  });
}

(async () => {
  try {
    await setTimeoutAndLog("A", 1000);
    await setTimeoutAndLog("B", 1000);
    await setTimeoutAndLog("C", 1000);
    await setTimeoutAndLog("D", 1000);
  } catch (err) {
    console.log(err);
  }
})();
