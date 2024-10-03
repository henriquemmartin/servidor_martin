console.log("ENTROU EM MODEL3.JS");
const mongoose = require("mongoose");
const contadorSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true },
    largura: { type: Number},
    comprimento: { type: Number},
    cidade: { type: String },
    estado: { type: String },
    email: { type: String },
    telefone: { type: String },
    projeto: { type: String },
    projeto2: { type: String },
    projetoNome: { type: String },
    valor: { type: Number},
    enviado: { type: String },
  },
  { timestamps: true }
);
const Venda = mongoose.model("Venda", contadorSchema);
module.exports = Venda;
