const express = require('express');
//const bodyParser = require ('body-parser');

const app = express();

//app.use(bodyParser.json())
app.use(express.json()) 

//app.use(bodyParser.urlencoded({extended:true}))
app.use(express.urlencoded())

const port = 3000;

app.get('/teste', (req,res) => 
    res.status(200).json({ mesg:'Curso a API Sequialize' })
)

app.listen(port,()=> console.log(`servidor esta rodando na porta ${port}`));

module.exports = app;