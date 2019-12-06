const http = require('http');
const {requireFileNoCache} = require("../require_files/util")
const server = http.createServer();

server.on('request', async (req, res) => {
  res.end(requireFileNoCache(__dirname+"/users.json"));
});
server.listen(8080);