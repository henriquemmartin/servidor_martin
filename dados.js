console.log("INICIANDO DADOS.JS");

const express = require("express");
const cors = require("cors");

// conexão
const main = require("./conn");
main();

// models
const Projetos = require("./model");
const Contagem = require("./model2");
const Venda = require("./model3");
const Parceria = require("./model4");
const Casa = require("./model5");

// funções de escrita
const {
  adiciona_valor,
  atualiza_valor,
  deleta_valor,
  adiciona_valor2,
  adiciona_valor3,
  atualiza_valor3,
  deleta_valor3,
  adiciona_valor4,
  adiciona_valor5,
  atualiza_valor5,
  deleta_valor5,
} = require("./adiciona");

const app = express();

// middlewares (CORRETO)
app.use(cors());
app.use(express.json());

// ============================
// CACHE EM MEMÓRIA
// ============================
let projetosCache = [];
let vendasCache = [];
let contagemCache = [];
let parceriasCache = [];
let casasCache = [];

// ============================
// FUNÇÕES DE LEITURA
// ============================
async function carregarProjetos() {
  projetosCache = await Projetos.find();
}

async function carregarVendas() {
  vendasCache = await Venda.find().sort({ _id: -1 }).limit(200);
}

async function carregarContagem() {
  contagemCache = await Contagem.find().sort({ _id: -1 }).limit(200);
}

async function carregarParcerias() {
  parceriasCache = await Parceria.find().sort({ _id: -1 }).limit(200);
}

async function carregarCasas() {
  casasCache = await Casa.find().sort({ _id: -1 }).limit(200);
}

// ============================
// ROTAS GET
// ============================
app.get("/arquivo", (req, res) => {
  res.json(projetosCache);
});

app.get("/venda", (req, res) => {
  res.json(vendasCache);
});

app.get("/parceria", (req, res) => {
  res.json(parceriasCache);
});

app.get("/casa", (req, res) => {
  res.json(casasCache);
});

app.get("/movimento", (req, res) => {
  res.json(contagemCache);
});

// ============================
// LOGIN (MINIMAMENTE CORRIGIDO)
// ============================
app.post("/login", (req, res) => {
  const { login, senha } = req.body;

  if (login === "henrique" && senha === "martin") {
    res.json({ liberado: true, apelido: login });
  } else {
    res.status(401).json({ liberado: false });
  }
});

// ============================
// PROJETOS
// ============================
app.post("/message", async (req, res) => {
  try {
    await adiciona_valor(req.body);
    await carregarProjetos();
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Erro ao adicionar projeto" });
  }
});

app.put("/message", async (req, res) => {
  try {
    await atualiza_valor(req.body);
    await carregarProjetos();
    res.json({ success: true });
  } catch {
    res.status(500).json({ error: "Erro ao atualizar projeto" });
  }
});

app.delete("/message", async (req, res) => {
  try {
    await deleta_valor(req.body);
    await carregarProjetos();
    res.json({ success: true });
  } catch {
    res.status(500).json({ error: "Erro ao deletar projeto" });
  }
});

// ============================
// VENDAS
// ============================
app.post("/venda", async (req, res) => {
  try {
    await adiciona_valor3(req.body);
    await carregarVendas();
    res.json({ success: true });
  } catch {
    res.status(500).json({ error: "Erro ao adicionar venda" });
  }
});

app.put("/venda", async (req, res) => {
  try {
    await atualiza_valor3(req.body);
    await carregarVendas();
    res.json({ success: true });
  } catch {
    res.status(500).json({ error: "Erro ao atualizar venda" });
  }
});

app.delete("/venda", async (req, res) => {
  try {
    await deleta_valor3(req.body);
    await carregarVendas();
    res.json({ success: true });
  } catch {
    res.status(500).json({ error: "Erro ao deletar venda" });
  }
});

// ============================
// CONTAGEM
// ============================
app.post("/contagem", async (req, res) => {
  try {
    await adiciona_valor2(req.body);
    await carregarContagem();
    res.json({ success: true });
  } catch {
    res.status(500).json({ error: "Erro ao salvar contagem" });
  }
});

// ============================
// PARCERIAS
// ============================
app.post("/parceria", async (req, res) => {
  try {
    await adiciona_valor4(req.body);
    await carregarParcerias();
    res.json({ success: true });
  } catch {
    res.status(500).json({ error: "Erro ao salvar parceria" });
  }
});

// ============================
// CASAS
// ============================
app.post("/casa", async (req, res) => {
  try {
    await adiciona_valor5(req.body);
    await carregarCasas();
    res.json({ success: true });
  } catch {
    res.status(500).json({ error: "Erro ao salvar casa" });
  }
});

app.put("/casa", async (req, res) => {
  try {
    await atualiza_valor5(req.body);
    await carregarCasas();
    res.json({ success: true });
  } catch {
    res.status(500).json({ error: "Erro ao atualizar casa" });
  }
});

app.delete("/casa", async (req, res) => {
  try {
    await deleta_valor5(req.body);
    await carregarCasas();
    res.json({ success: true });
  } catch {
    res.status(500).json({ error: "Erro ao deletar casa" });
  }
});

// ============================
// INICIALIZAÇÃO
// ============================
(async () => {
  await carregarProjetos();
  await carregarVendas();
  await carregarContagem();
  await carregarParcerias();
  await carregarCasas();

  app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
  });
})();

module.exports = { projetosCache };
