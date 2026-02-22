const path = require("path")

const fs = require("fs");

// Pegar o nome do arquivo
console.log("nome do arquivo", path.basename(__filename));

// Pegar a extensão de um arquivo.
console.log("extensão do arquivo", path.extname(__filename));

// Criar um arquivo no diretório do arquivo atual.

fs.writeFile(path.join(__dirname, "message.txt"), "Welcome to FSC!", ()=> {})


