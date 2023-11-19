// ORM : Object Relational Mapping
const { Schema, model } = require('mongoose')

const CategoriaSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre de Categoria requerido'],
        minlength: 3,
        maxlength : 120

    },
    descripcion: {
        type: String,
        required: [true, 'Descripcion de Categoria requerido'],
        minlength: 3,
        maxlength : 250
        
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    }
})

module.exports = model('Categoria', CategoriaSchema)