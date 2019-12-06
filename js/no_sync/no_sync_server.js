const http = require('http');
const fs = require('fs');
const server = http.createServer();

server.on('request', async (req, res) => {
  fs.createReadStream(__dirname+"/users.json").pipe(res)
});
server.listen(8080);