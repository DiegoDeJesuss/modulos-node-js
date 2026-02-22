const fs = require("fs");
const path = require("path")
// Criar uma pasta em um diretório
fs.mkdir(path.join(__dirname, "new-folder"), (error) => {
    
});

// Criar um arquivo nessa nova pasta

fs.writeFile(path.join(__dirname, "new-folder", "message.txt"), "Welcome to FSC!", (error) => {
    // console.log(error)
});

fs.appendFile(path.join(__dirname, "new-folder", "message.txt"), "\nThis is a new line.", (error) => {
    // console.log(error)
});

// Ler um arquivo e salva na variável fileContent 

let fileContent = "";
fs.readFile(path.join(__dirname, "new-folder", "message.txt"), "utf-8", (error, data) => {
    // console.log(error)
    console.log(data)
    console.log(fileContent)
});





