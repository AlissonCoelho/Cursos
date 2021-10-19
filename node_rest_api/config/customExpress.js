const express = require('express')
const consign = require('consign')

//Exporta
module.exports = () =>
{
    const app = express()

    //app.use(bodyParser.json())
    app.use(express.json()) 

    //app.use(bodyParser.urlencoded({extended:true}))
    app.use(express.urlencoded())
    
    //"enxerga" a pasta controllers e o que foi exportado de lá
    consign()
        .include('controllers')
        .into(app)
    return app
}