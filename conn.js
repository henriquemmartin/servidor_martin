const mongoose = require("mongoose");
async function main() {
  const uri =
    "mongodb+srv://henriquemmartin:lYIJj2cp1bUmhXoT@bancoprincipal.4eorn.mongodb.net/?retryWrites=true&w=majority&appName=bancoPrincipal";

//bando de dados_usaername henriquemmartin senha lYIJj2cp1bUmhXoT
  await mongoose.connect(uri);
  console.log("conectado ao bando de dados Primario!");
}
module.exports = main;
//ok

