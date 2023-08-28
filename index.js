const express = require("express");
const app = express();

// Endpoint Principal
app.get("/", function (req, res) {
  res.send("Hello World");
});

// Endpoint /oi
app.get("/oi", function (req, res) {
  res.send("Olá, mundo!");
});

app.listen(3000);
