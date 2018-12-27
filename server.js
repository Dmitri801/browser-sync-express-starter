const express = require("express");
const helmet = require("helmet");
const PORT = 7000;
const app = express();
app.use(helmet());
app.use(express.static("public"));

app.get("/", (req, res, next) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/test", (req, res, next) => {
  res.send("Hi there");
});

app.listen(PORT, () => {
  console.log(`Express Server Runnin' on port ${PORT}`);
});
