const { request, response } = require('express')
const Categoria = require('../models/categoria')
const e = require('express')


// CREAR  CATEGORIA
const createCategoria = async (req = request, res = response) => {
    const { nombre,descripcion } = req.body
    try {

        const datos = { nombre,descripcion }
        const categoria = new Categoria(datos)
        await categoria.save()
        return res.json(categoria)

    } catch (error) {
        console.log(error)
        return res.json({ msj: error })
    }
}

// LISTAR CATEGORIA
const getCategoria = async (req = request, res = response) => {

    try {
        const categoria = await Categoria.find()
        return res.status(201).json(categoria)

    } catch (error) {
        console.log(error)
        return res.json({ msj: error })
    }
}

// ACTUALIZAR CATEGORIA
const updateCategoria = async (req = request, res = response) => {

    try {
        const { id } = req.params
        const data = req.body
        data.fechaActualizacion = new Date()
        const categoria = await Categoria.findByIdAndUpdate(id, data, { new: true })
        return res.status(201).json(categoria)
    } catch (error) {
        console.log(error)
        return res.json({ msj: error })
    }
}

// ELIMINAR CATEGORIA
const deleteCategoria = async (req = request, res = response) => {
    try {
        const { id } = req.params

        const categoria = await Categoria.findByIdAndDelete(id, { new: true })
        return res.status(201).json(categoria)

    } catch (error) {
        console.log(error)
        return res.json({ msj: error })
    }
}
module.exports = {
    createCategoria,
    getCategoria,
    updateCategoria,
    deleteCategoria
}