const fs = require("fs");
let files = {};
function requireJSON(path) {
  if (!files[path]) {
    files[path] = JSON.parse(fs.readFileSync(path));
  }
  return files[path];
}
module.exports = {
  requireJSON
};
