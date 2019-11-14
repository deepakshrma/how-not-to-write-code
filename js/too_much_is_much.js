const delay = () =>
  new Promise(r => {
    setTimeout(r, 1000);
  });
const fetchData = async function(url) {
  await delay();
  if (url == "fail") throw "CODE_FAIL";
  if (url == "fatal") throw "CODE_FATAL";
  if (url == "") return "OK";
};
async function main() {
  try {
    const data = await fetchData("fail");
  } catch (e) {
    if (e == "CODE_FAIL") {
      // Show toast message
      console.log(e);
    }
    if (e == "CODE_FATAL") {
      // Show popup message
      console.log(e);
    }
  }
}
main();

const onCatchError = e => {
  if (e == "CODE_FAIL") {
    // Show toast message
    console.log(e);
  }
  if (e == "CODE_FATAL") {
    // Show popup message
    console.log(e);
  }
};
const onSomeOtherCatchError = () => {};
async function mainNew() {
  try {
    const data = await fetchData("fail")
      .catch(onCatchError)
      .catch(onSomeOtherCatchError);
  } catch (e) {
    console.log("Something else handle here");
  }
}
mainNew();
