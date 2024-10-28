console.log("ENTROU EM MODEL4.JS (parceria)");
const mongoose = require("mongoose");
const contadorSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true },
    numero: { type: Number},
    email: { type: String, required: true },
    cargo: { type: String },
    registro: { type: String },
    instagram: { type: String },
    estado: { type: String },
    cidade1: { type: String, required: true },
    cidade2: { type: String },
    cidade3: { type: String },
    cidade4: { type: String },
    cidade5: { type: String },
    valor: { type: Number},
    acompanhamento: { type: String },
    executa: { type: String },
  },
  { timestamps: true }
);
const Parceria = mongoose.model("Parceria", contadorSchema);
module.exports = Parceria;

