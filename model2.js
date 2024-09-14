console.log("ENTROU EM MODEL2.JS");
const mongoose = require("mongoose");
const contadorSchema = new mongoose.Schema(
  {
    pagina: { type: String, required: true },
    informacao: { type: String, required: false },
  },
  { timestamps: true }
);
const Contagem = mongoose.model("Contagem", contadorSchema);
module.exports = Contagem;
