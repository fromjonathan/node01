const https = require("https"),
  fs = require("fs");

const options = {
  key: fs.readFileSync("/etc/letsencrypt/live/fromjon.com/privkey.pem"),
  cert: fs.readFileSync("/etc/letsencrypt/live/fromjon.com/fullchain.pem")
};

const app = express();

app.use((req, res) => {
  res.writeHead(200);
  res.end("hello world\n");
});

app.listen(8000);

https.createServer(options, app).listen(3000);