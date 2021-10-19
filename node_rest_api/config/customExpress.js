const express = require('express')
const consign = require('consign')

//Exporta
module.exports = () =>
{
    const app = express();
    //"enxerga" a pasta controllers e o que foi exportado de lá
    consign()
        .include('controllers')
        .into(app)
    return app
}