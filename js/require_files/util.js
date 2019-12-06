const fs = require("fs");
let files = {};
function requireJSON(path) {
  if (!files[path]) {
    files[path] = JSON.parse(fs.readFileSync(path));
  }
  return files[path];
}
function requireFile(path) {
  if (!files[path]) {
    files[path] = fs.readFileSync(path);
  }
  return files[path];
}
function requireFileNoCache(path) {
  return fs.readFileSync(path);
}
module.exports = {
  requireJSON,
  requireFile,
  requireFileNoCache
};
