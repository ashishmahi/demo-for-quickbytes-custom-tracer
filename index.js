const express = require("express");

const app = express();

app.get("/", (req, res) => res.send(Date.now().toString()));

app.listen(8081, () => {
  console.log("Frontend listening on port 8081!");
});