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

// Endpoints de Herois
const lista = ["Mulher Maravilha", "Capitã Marvel", "Homem de Ferro"];
//             0                    1                2

// Read All -> [GET] /herois
app.get("/herois", function (req, res) {
  res.send(lista);
});

app.listen(3000);
