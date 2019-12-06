const http = require('http');
const {requireFile} = require("../require_files/util")
const server = http.createServer();

server.on('request', async (req, res) => {
  res.end(requireFile(__dirname+"/users.json"));
});
server.listen(8080);