const conrtroleAtendimeto = require('../models/atendimentos');
const schema = require("../index"); //importa um array do index

//Exporta o modulo e tem que ser usado em algum lugar
//Instalado consign
module.exports = app =>
{
    //req = recebido
    //res = enviando
    app.get('/atendimentos',(req, res) => 
    {
        conrtroleAtendimeto.listar(schema,res);
    })

    app.get('/atendimentos/:id',(req, res) => 
    {
        const id = req.params.id;
        conrtroleAtendimeto.buscarPorId(schema,id,res);
    })

    app.post('/atendimentos',(req, res) => {
        
        const dados = req.body;
        conrtroleAtendimeto.adicionar(schema, dados, res);
        
    }
    )
}