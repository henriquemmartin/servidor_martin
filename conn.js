const mongoose = require("mongoose");
async function main() {
  const uri =
    "mongodb://mongo:YRYkGEucVKOtPSqTGfQgzCdpSZzQcaZm@autorack.proxy.rlwy.net:14111";

//bando de dados_usaername henriquemmartin senha lYIJj2cp1bUmhXoT
  await mongoose.connect(uri);
  console.log("conectado ao bando de dados Primario!");
}
module.exports = main;
//ok

