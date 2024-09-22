const mongoose = require("mongoose");
async function main() {
  const uri =
    "mongodb://mongo:YRYkGEucVKOtPSqTGfQgzCdpSZzQcaZm@autorack.proxy.rlwy.net:14111";

//bando de dados_usaername henriquemmartin senha lYIJj2cp1bUmhXoT
//mongodb://mongo:YRYkGEucVKOtPSqTGfQgzCdpSZzQcaZm@autorack.proxy.rlwy.net:14111
//bando de dados teste username henriquemmartin senha RiluhWPjASwVcsC5
//mongodb+srv://henriquemmartin:RiluhWPjASwVcsC5@cluster0.dkvnt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
  await mongoose.connect(uri);
  console.log("conectado ao bando de dados Primario!");
}
module.exports = main;
//ok

