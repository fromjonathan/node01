import express from 'express';
import { createServer } from "https";
import { readFileSync } from "fs";

const options = {
  key: readFileSync("/etc/letsencrypt/live/fromjon.com/privkey.pem"),
  cert: readFileSync("/etc/letsencrypt/live/fromjon.com/fullchain.pem")
};

const app = express();

app.use((req, res) => {
  res.writeHead(200);
  res.end("hello world\n");
});

app.listen(3000);

createServer(options, app).listen(3000);