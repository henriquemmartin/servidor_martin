const mongoose = require("mongoose");
const Projetos = require("./model");
const Contagem = require("./model2");
const Venda = require("./model3");

async function adiciona_valor(valor) {
  const garopaba = new Projetos(valor);
  await garopaba.save();
  console.log("cadastrado novo projeto");
}
async function atualiza_valor(valor) {
  const garopaba = new Projetos(valor);
  console.log("Tentando Atualizar valor");
  try {
    await Projetos.findOneAndUpdate({ _id: valor.id }, valor);
    console.error("Projeto atualizado")
  } catch (error) {
    console.error(`ERRO ENCONTRADO!: ${error.message}`);
  }
}
async function deleta_valor(valor) {
  const garopaba = new Projetos(valor);
  console.error("chegou em funçao deletar")
  await Projetos.deleteOne({ _id: valor.id });
  console.log("Projeto Apagado");
}
async function adiciona_valor2(valor) {
  const garopaba2 = new Contagem(valor);
  await garopaba2.save();
  console.log("nova contagem cadastradas");
}


//VENDASSSSSSSSSSS
async function adiciona_valor3(valor) {
  const garopaba3 = new Venda(valor);
  await garopaba3.save();
  console.log("nova contagem cadastradas");
}

async function atualiza_valor3(valor3) {
  const garopaba3 = new Venda(valor3);
  console.log("Tentando Atualizar valor --> "+valor3.nome);
  try {
    await Venda.findOneAndUpdate({ _id: valor3.id }, valor3);
    console.error("Projeto atualizado")
  } catch (error) {
    console.error(`ERRO ENCONTRADO!: ${error.message}`);
  }
}

async function deleta_valor3(valor) {
  const garopaba3 = new Venda(valor);
  console.error("chegou em funçao deletar")
  await Venda.deleteOne({ _id: valor.id });
  console.log("Projeto Apagado");
}
module.exports = {
  adiciona_valor,
  atualiza_valor,
  deleta_valor,
  adiciona_valor2,
  adiciona_valor3,
  deleta_valor3,
  atualiza_valor3,
};
