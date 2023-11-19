const express = require('express')
const { mongoConn } = require('./databases/configuration')
const dotenv = require('dotenv').config()
const cors = require('cors')

const categorias = require('./routes/categoria')


mongoConn()

const app = express()

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
// middlewares
app.use(express.json())
app.use(cors(corsOptions))


app.use(cors(corsOptions));

// RUTAS 
app.use('/api/v1/categorias', categorias)


module.exports = app