console.log("INICIANDO DADOS.JS");
const express = require("express");
const main = require("./conn");
const Projetos = require("./model");
const Contagem = require("./model2");
const enviarEmail = require("./enviarEmail");
const {
  adiciona_valor,
  atualiza_valor,
  deleta_valor,
  adiciona_valor2
} = require("./adiciona");
main();
console.log("DE VOLTA A DADOS.JS");
const app = express();
var cors = require("cors");
app.use(express.json({ extended: true }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  app.use(cors());
  console.log("middware ativado");
  next();
});
//DADOS REFERENTES A PROJETOS.
app.listen(3000, () => {
  console.log("conectado a porta " + 3000);
  app.get("/arquivo", (req, res) => {
    console.log("solicitando o geti");
    res.send(dadosLidos);
  });
  app.get("/movimento", (req, res) => {
    console.log("solicitando o geti");
    res.send(contagemLidos);
  });
});
var dadosLidos = [];
async function ler() {
  console.log("função ler()");
  dadosLidos = await Projetos.find();
  console.log("dados lidos com sucesso!");
}

app.post("/message", (req, res) => {
  const texto = req.body;
  adiciona_valor(texto);
  console.log(texto);
  ler();
  res.send("Adicionado com Sucesso");
});
app.put("/message", (req, res) => {
  console.log("*Clicou em atualizar");
  const texto = req.body;
  atualiza_valor(texto);
  console.log(texto);
  ler();
  res.send("Atualizado com Sucesso");
});
app.delete("/message", (req, res) => {
  console.error("****Clicou em deletar");
  const texto = req.body;
  deleta_valor(texto);
  res.send("Deletado com Sucesso");
  ler();
});

//DADOS REFERENTES A CONTAGEM

var contagemLidos = [];
async function ler2() {
  console.log("função ler2()");
  contagemLidos = await Contagem.find().sort({ _id: -1 }).limit(200);
  console.log("contagem dados lidos com sucesso!");
}

app.post("/contagem", (req, res) => {
  const texto2 = req.body;
  adiciona_valor2(texto2);
  if (texto2.informacao == "***CLICOU EM COMPRAR (whatsapp)***") {
    console.log("EMAIL");
    enviarEmail(texto2.pagina).catch(console.error);
  }
  ler2();
  res.send("Adicionado com Sucesso");
});
app.post("/venda", (req, res) => {
  // const texto3 = req.body;
  // adiciona_valor3(texto3);
  console.log(texto3);
  // ler3();
  res.send("Vendas Adicionado com Sucesso");
});
ler();
ler2();
module.exports = { dadosLidos };

//qhRSIHJmqU9UrsTi
