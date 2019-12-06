const fs = require("fs");
const { requireJSON } = require("./util");

function main() {
  console.time("REQUIRE");
  const user = require("./user.json");
  console.timeEnd("REQUIRE");

  console.time("REQUIRE-2");
  const userJson = JSON.parse(fs.readFileSync(__dirname + "/user.json"));
  console.timeEnd("REQUIRE-2");

  console.time("REQUIRE-FOR");
  for (let e = 0; e < 10000; e++) require("./user.json");
  console.timeEnd("REQUIRE-FOR");

  console.time("REQUIRE-FOR-2");
  for (let e = 0; e < 10000; e++)
    JSON.parse(fs.readFileSync(__dirname + "/user.json"));
  console.timeEnd("REQUIRE-FOR-2");

  console.time("REQUIRE-FOR-NEW");
  for (let e = 0; e < 10000; e++) {
    require("./user.json");
  }
  console.timeEnd("REQUIRE-FOR-NEW");

  console.time("REQUIRE-FOR-NEW-2");
  for (let e = 0; e < 10000; e++) {
    requireJSON(__dirname + "/user.json");
  }
  console.timeEnd("REQUIRE-FOR-NEW-2");
}
main();
