const { Router } = require('express');
const { check } = require('express-validator');

//Controllers
const { diplomasGetById } = require('../controllers/diplomas.controller');

//Enrutador
const router = Router();

//GET POR ID
router.get('/:dui',[//middlewares para validar peticiones correctas
    // check('dui').custom(existeProducto),
    // check('dui', 'Ese no es un id valido').isNumeric(),
    // validarCampos
], diplomasGetById)

module.exports = router;