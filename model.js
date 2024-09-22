console.log("ENTROU EM MODEL.JS");
const mongoose = require("mongoose");
const projetosSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true },
    nomeEsp: { type: String},
    largura: { type: Number, required: true },
    comprimento: { type: Number, required: true },
    andares: { type: Number },
    quartos: { type: Number },
    terreo: { type: Number, required: true },
    superior: { type: Number },
    garagem: { type: Number },
    gourmet: { type: Number },
    descricao: { type: String },
    descricaoEsp: { type: String },
    vendas: { type: Number },
    linkv: { type: String },
    link2: { type: String },
    linkEsp: { type: String },
    tour: { type: String },
    drive: { type: String },
    categoria: { type: String },
  },
  { timestamps: true }
);
const Projetos = mongoose.model("Projetos", projetosSchema);
module.exports = Projetos;
