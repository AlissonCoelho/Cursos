//Exporta o modulo e tem que ser usado em algum lugar
//Instalado consign
module.exports = app =>
{
    //req = recebido
    //res = enviando
    app.get('/atendimentos',(req, res) => res.send('Você esta na rota atendimentos adicionado'))
}