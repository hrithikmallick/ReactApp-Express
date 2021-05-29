const express = require("express");
const path = require("path");
const app = express();
const port = 8081;
const StaticPath = path.join(__dirname, "../public");
app.use(express.static(StaticPath));
app.get("/", (req, res) => {
  res.write("<h1>hello guys</h1>");
  res.send();
  //routing
});
app.listen(port, () => {
  console.log(`listing to the http://localhost:${port}`);
});
