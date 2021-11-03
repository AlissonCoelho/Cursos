const express = require('express');
//const bodyParser = require('body-parser');
const {estrategiasAutenticacao} = require('./src/usuarios/index');

const app = express()

//app.use(bodyParser.json())
app.use(express.json()) 

//app.use(bodyParser.urlencoded({extended:true}))
app.use(express.urlencoded())

module.exports = app;
