const {Router} = require('express')
const {createCategoria,getCategoria,updateCategoria,deleteCategoria} = require('../controllers/categoria')

const router = Router()

// C R U D
router.post('/', createCategoria)
router.get('/', getCategoria)
router.put('/:id', updateCategoria)
router.delete('/:id', deleteCategoria)

module.exports = router