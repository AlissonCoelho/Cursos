const addAtendimeto = require('../models/atendimentos')
const importIndex = require("../index") //importa um array do index

//Exporta o modulo e tem que ser usado em algum lugar
//Instalado consign
module.exports = app =>
{
    //req = recebido
    //res = enviando
    app.get('/atendimentos',(req, res) => res.send(`Você esta na rota atendimentos adicionado`))

    app.post('/atendimentos',(req, res) => {
        
        const dados = req.body;
        addAtendimeto.adicionar(importIndex, dados, req, res);
        
    }
    )
}