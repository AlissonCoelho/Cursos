const conexao = require(`./infraestrutura/conexao`);
let conexaoOK = false;
const customExpress = require(`./config/customExpress`);
const app = customExpress();
const port = 3000

function StartServidor() {
    console.log('MongoDB conectado');
    app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
}

conexao.connect('mongodb://localhost:27017/agenda-petshop', err => err ? console.log('mongo erro',err) :  StartServidor() )

