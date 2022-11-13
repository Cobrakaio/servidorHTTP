var http = require('http')

http.createServer(function(req,res){

    res.end("Olá") // resposta ao servidor

}).listen(8081) // criaçao do servidor na porta 8081

console.log("O servidor rodando!!")