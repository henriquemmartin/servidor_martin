const mongoose = require("mongoose");
require('dotenv').config();
async function main() {
  const uri = process.env.MONGODB_URI
 

  await mongoose.connect(uri);
  console.log("conectado ao bando de dados Primario!");
}
module.exports = main;
//ok

