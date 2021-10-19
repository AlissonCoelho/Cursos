const conexao = require(`./infraestrutura/conexao`);
const customExpress = require(`./config/customExpress`);
const Tabelas = require('./infraestrutura/tabelas')

const port = 3000


conexao.connect('mongodb://localhost:27017/petshop', err => err ? console.log('mongo erro',err) : StartServidor() )

 function StartServidor() {
    console.log('MongoDB conectado');
    Tabelas(conexao);
    const app = customExpress();
    app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
}
 