const mongoose = require("mongoose");
const Projetos = require("./model");
const Contagem = require("./model2");
async function adiciona_valor(valor) {
  const garopaba = new Projetos(valor);
  await garopaba.save();
  console.log("cadastrado novo projeto");
}
async function atualiza_valor(valor) {
  await Projetos.findOneAndUpdate({ _id: valor.id }, valor);
  console.log("Projeto Atualizado");
}
async function deleta_valor(valor) {
  await Projetos.deleteOne({ _id: valor.id });
  console.log("Projeto Apagado");
}
async function adiciona_valor2(valor) {
  const garopaba2 = new Contagem(valor);
  await garopaba2.save();
  console.log("nova contagem cadastradas");
}
module.exports = {
  adiciona_valor,
  atualiza_valor,
  deleta_valor,
  adiciona_valor2,
};
