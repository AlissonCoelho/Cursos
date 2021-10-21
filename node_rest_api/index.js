const mongoose = require(`./infraestrutura/mongoose`);
const customExpress = require(`./config/customExpress`);
const Tabelas = require('./infraestrutura/tabelas');

const port = 3000;


mongoose.connect('mongodb://localhost:27017/petshop', err => err ? console.log('mongo erro',err) : manin());

 function manin() {
    console.log('MongoDB conectado');
    module.exports = Tabelas(mongoose);
    const app = customExpress();
    app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
}



