const express = require('express')
const consign = require('consign')

const app = express();

//"enxerga" a pasta controllers e o que foi exportado de lá
consign()
    .include('controllers')
    .into(app)