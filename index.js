const express = require("express");
const app = express();

// Habilitamos o processamento de JSON
app.use(express.json());

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

// Create -> [POST] /herois
app.post("/herois", function (req, res) {
  // console.log(req.body, typeof req.body);

  // Extrai o nome do Body da Request (Corpo da Requisição)
  const item = req.body.nome;

  // Inserir o item na lista
  lista.push(item);

  // Enviamos uma resposta de sucesso
  res.send("Item criado com sucesso!");
});

// Read By Id -> [GET] /herois/:id
app.get("/herois/:id", function (req, res) {
  // Pegamos o parâmetro de rota ID
  const id = req.params.id - 1;

  // Pegamos a informação da lista
  const item = lista[id];

  // Exibimos o item na resposta do endpoint
  res.send(item);
});

// Update -> [PUT] /herois/:id
app.put("/herois/:id", function (req, res) {
  // Pegamos o parâmetro de rota ID
  const id = req.params.id - 1;

  // Extrai o nome do Body da Request (Corpo da Requisição)
  const item = req.body.nome;

  // Atualizamos a informação na lista de registros
  lista[id] = item;

  res.send("Item editado com sucesso!");
});

// Delete -> [DELETE] /herois/:id
app.delete("/herois/:id", function (req, res) {
  // Pegamos o parâmetro de rota ID
  const id = req.params.id - 1;

  // Excluir o item da lista
  delete lista[id];

  res.send("Item excluído com sucesso!");
});

app.listen(3000);
