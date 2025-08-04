console.log("ENTROU EM MODEL5.JS (casas)");
const mongoose = require("mongoose");
const contadorSchema = new mongoose.Schema(
  {
    quartos: { type: String, required: true },
    largura: { type: Number },
    comprimento: { type: Number },
    area: { type: Number },

    status: { type: String },
    valor: { type: Number },
    endereco: { type: String },
    bairro: { type: String },
    correto: { type: String },
    telefone: { type: Number },
    video: { type: String },
  },
  { timestamps: true }
);
const Parceria = mongoose.model("casasConstrucao", contadorSchema);
module.exports = Parceria;
