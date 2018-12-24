const express = require('express');
const https = require("https");
const fs = require("fs");

const options = {
  key: fs.readFileSync("/etc/letsencrypt/live/fromjon.com/privkey.pem"),
  cert: fs.readFileSync("/etc/letsencrypt/live/fromjon.com/fullchain.pem")
};

const app = express();

app.use((req, res) => {
  res.writeHead(200);
  res.end("hello world\n");
});

app.listen(3000);

https.createServer(options, app).listen(3000);