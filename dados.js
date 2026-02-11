console.log("INICIANDO DADOS.JS");

const express = require("express");
const cors = require("cors");

const main = require("./conn");

const Projetos = require("./model");
const Contagem = require("./model2");
const Venda = require("./model3");
const Parceria = require("./model4");

const {
  adiciona_valor,
  atualiza_valor,
  deleta_valor,
  adiciona_valor2,
  adiciona_valor3,
  deleta_valor3,
  atualiza_valor3,
  adiciona_valor4,
} = require("./adiciona");

const app = express();
app.use(express.json());
app.use(cors());

/* =========================
   VARIÁVEIS DE MEMÓRIA
========================= */
let dadosLidos = [];
let vendaLidos = [];
let contagemLidos = [];
let parceriaLidos = [];

/* =========================
   FUNÇÕES DE LEITURA
========================= */
async function ler() {
  console.log("função ler()");
  dadosLidos = await Projetos.find();
}

async function ler2() {
  console.log("função ler2()");
  contagemLidos = await Contagem.find().sort({ _id: -1 }).limit(200);
}

async function ler3() {
  console.log("função ler3 (vendas)");
  vendaLidos = await Venda.find().sort({ _id: -1 }).limit(200);
}

async function ler4() {
  console.log("função ler4 (parceria)");
  parceriaLidos = await Parceria.find().sort({ _id: -1 }).limit(200);
}

/* =========================
   ROTAS GET
========================= */
app.get("/arquivo", (req, res) => {
  return res.json(dadosLidos);
});

app.get("/venda", (req, res) => {
  return res.json(vendaLidos);
});

app.get("/parceria", (req, res) => {
  return res.json(parceriaLidos);
});

app.get("/movimento", (req, res) => {
  return res.json(contagemLidos);
});

app.get("/users", (req, res) => {
  const { nome, idade } = req.query;
  return res.send(`Nome: ${nome}, Idade: ${idade}`);
});

app.get("/login", (req, res) => {
  const { login, senha } = req.query;
  if (login === "henrique" && senha === "martin") {
    return res.json({ liberado: 1, apelido: login });
  }
  return res.json({ liberado: 0, apelido: login });
});

/* =========================
   ROTAS PROJETOS
========================= */
app.post("/message", async (req, res) => {
  try {
    await adiciona_valor(req.body);
    await ler();
    return res.send("Adicionado com sucesso");
  } catch (err) {
    console.error(err);
    return res.status(500).send("Erro ao adicionar projeto");
  }
});

app.put("/message", async (req, res) => {
  try {
    await atualiza_valor(req.body);
    await ler();
    return res.send("Atualizado com sucesso");
  } catch (err) {
    console.error(err);
    return res.status(500).send("Erro ao atualizar projeto");
  }
});

app.delete("/message", async (req, res) => {
  try {
    await deleta_valor(req.body);
    await ler();
    return res.send("Deletado com sucesso");
  } catch (err) {
    console.error(err);
    return res.status(500).send("Erro ao deletar projeto");
  }
});

/* =========================
   ROTAS VENDAS
========================= */
app.post("/venda", async (req, res) => {
  try {
    await adiciona_valor3(req.body);
    await ler3();
    return res.send("Venda adicionada com sucesso");
  } catch (err) {
    console.error(err);
    return res.status(500).send("Erro ao processar venda");
  }
});

app.put("/venda", async (req, res) => {
  try {
    await atualiza_valor3(req.body);
    await ler3();
    return res.send("Venda atualizada com sucesso");
  } catch (err) {
    console.error(err);
    return res.status(500).send("Erro ao atualizar venda");
  }
});

app.delete("/venda", async (req, res) => {
  try {
    await deleta_valor3(req.body);
    await ler3();
    return res.send("Venda deletada com sucesso");
  } catch (err) {
    console.error(err);
    return res.status(500).send("Erro ao deletar venda");
  }
});

/* =========================
   ROTAS CONTAGEM
========================= */
app.post("/contagem", async (req, res) => {
  try {
    await adiciona_valor2(req.body);
    await ler2();
    return res.send("Contagem adicionada com sucesso");
  } catch (err) {
    console.error(err);
    return res.status(500).send("Erro ao adicionar contagem");
  }
});

/* =========================
   ROTAS PARCERIA
========================= */
app.post("/parceria", async (req, res) => {
  try {
    await adiciona_valor4(req.body);
    await ler4();
    return res.send("Parceria registrada com sucesso");
  } catch (err) {
    console.error(err);
    return res.status(500).send("Erro ao registrar parceria");
  }
});

/* =========================
   START DO SERVIDOR
========================= */
(async () => {
  try {
    await main(); // conecta Mongo
    await ler();
    await ler2();
    await ler3();
    await ler4();

    app.listen(3000, () => {
      console.log("Servidor rodando na porta 3000");
    });
  } catch (err) {
    console.error("Erro fatal ao iniciar servidor:", err);
    process.exit(1);
  }
})();
