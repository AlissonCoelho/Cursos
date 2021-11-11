const express = require('express');
const routes = require('./routes');

const app = express();
const port = 3000;

//app.use(bodyParser.json())
app.use(express.json()) 

//app.use(bodyParser.urlencoded({extended:true}))
app.use(express.urlencoded())

routes(app);

app.listen(port,()=> console.log(`servidor esta rodando na porta ${port}`));

module.exports = app;