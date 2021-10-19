//Exporta o modulo e tem que ser usado em algum lugar
//Instalado consign
module.exports = app =>
{
    //req = recebido
    //res = enviando
    app.get('/atendimentos',(req, res) => res.send(`Você esta na rota atendimentos adicionado`))

    app.post('/atendimentos',(req, res) => {
        console.log(req.body)
        res.send(`Você está na rota de atendimento e está realizando um POST`)
    }
    )
}