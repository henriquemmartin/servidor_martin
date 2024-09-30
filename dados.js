console.log("INICIANDO DADOS.JS");
const express = require("express");
const main = require("./conn");
const Projetos = require("./model");
const Contagem = require("./model2");
const socketIo = require("socket.io")
const {
  adiciona_valor,
  atualiza_valor,
  deleta_valor,
  adiciona_valor2,
  adiciona_valor3,
  deleta_valor3,
  atualiza_valor3,

} = require("./adiciona");
main();
console.log("DE VOLTA A DADOS.JS");
const app = express();
var cors = require("cors");
const Venda = require("./model3");
app.use(express.json({ extended: true }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  app.use(cors());
  next();
});


app.listen(3000, () => {
  console.log("conectado a porta " + 3000);
  app.get("/arquivo", (req, res) => {
    res.send(dadosLidos);
  });
  app.get("/movimento", (req, res) => {
    res.send(contagemLidos);
  });
  app.get("/venda", (req, res) => {
    res.send(vendaLidos);
  });
});

//DADOS REFERENTES A PROJETOS.
var dadosLidos = [];

async function ler() {
  console.log("função ler()");
  dadosLidos = await Projetos.find();
  console.log("dados lidos com sucesso!");
}

app.post("/message", async (req, res) => {
  try {
    const texto = req.body;
    await adiciona_valor(texto);
    await ler();
    res.send("BackEnd: Adicionado com sucesso");
  } catch (error) {
    console.error("Erro ao processar a venda:", error);
    res.status(500).send("Erro ao processar a venda");
  }
});
app.put("/message", async (req, res) => {
  try {
    const texto = req.body;
    await atualiza_valor(texto);
    await ler();
    res.send("BackEnd: atualizado com sucesso");
  } catch (error) {
    console.error("Erro ao processar a venda:", error);
    res.status(500).send("Erro ao processar a venda");
  }
});
app.delete("/message", async (req, res) => {
  try {
    const texto = req.body;
    await deleta_valor(texto);
    await ler();
    res.send("BackEnd: deletado com sucesso");
  } catch (error) {
    console.error("Erro ao processar a venda:", error);
    res.status(500).send("Erro ao processar a venda");
  }
});




//DADOS REFERENTES A VENDAS
var vendaLidos = [];
async function ler3() {
  console.log("função ler3 (vendas)");
  vendaLidos = await Venda.find().sort({ _id: -1 }).limit(200);
}
app.post("/venda", async (req, res) => {
  console.log("chegou em GET - post");
  try {
    const texto = req.body;
    console.log(texto);
    await adiciona_valor3(texto);
    await ler3();
    res.send("BackEnd: Adicionado e vendas lidas com sucesso");
  } catch (error) {
    console.error("Erro ao processar a venda:", error);
    res.status(500).send("Erro ao processar a venda");
  }
});
app.put("/venda", async (req, res) => {
  try {
    const texto = req.body;
    console.log(texto);
    await atualiza_valor3(texto);
    await ler3();
    res.send("BackEnd: atualizado com sucesso");
  } catch (error) {
    console.error("Erro ao processar a venda:", error);
    res.status(500).send("Erro ao processar a venda");
  }
});
app.delete("/venda", async (req, res) => {
  try {
    const texto = req.body;
    await deleta_valor3(texto);
    await ler3();
    res.send("BackEnd: deletado com sucesso");
  } catch (error) {
    console.error("Erro ao processar a venda:", error);
    res.status(500).send("Erro ao processar a venda");
  }
});
app.post("/refresh", (req, res) => {
  console.log("****Clicou em REFRESH ");
  ler3();
  res.json({ message: 'Sistema atualizado com sucesso!' });
});
//DADOS REFERENTES A CONTAGEM
var contagemLidos = [];
async function ler2() {
  console.log("função ler2()");
  contagemLidos = await Contagem.find().sort({ _id: -1 }).limit(200);
  console.log("contagem dados lidos com sucesso!");
}
app.post("/contagem", (req, res) => {
  console.log("*Clicou em atualizar");
  res.send("Vendas Adicionado com Sucesso");
  const texto2 = req.body;
  adiciona_valor2(texto2);
  if (texto2.informacao == "***CLICOU EM COMPRAR (whatsapp)***") {
  }
  ler2();
  res.send("Adicionado com Sucesso");
});

ler();
ler2();
ler3();
module.exports = { dadosLidos };

