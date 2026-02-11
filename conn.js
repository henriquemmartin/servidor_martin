const mongoose = require("mongoose");
require("dotenv").config();

module.exports = async function main() {
  try {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
      throw new Error("MONGODB_URI não definida no .env");
    }

    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000, // 5s no máximo
    });

    console.log("MongoDB CONECTADO com sucesso");

  } catch (err) {
    console.error("❌ ERRO AO CONECTAR NO MONGODB:");
    console.error(err.message);
    process.exit(1); // ⬅️ MATA o servidor se não conectar
  }
};
