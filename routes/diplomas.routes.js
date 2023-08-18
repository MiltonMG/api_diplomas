const { Router } = require('express');
const { check } = require('express-validator');

//Controllers
const { diplomasGetById } = require('../controllers/diplomas.controller');

//middleware personalizado
const { validarCampos, 
    existeDiploma} = require('../middlewares/validar-campos');

//Enrutador
const router = Router();

//GET POR ID
router.get('/:dui',[//middlewares para validar peticiones correctas
    check('dui').custom(existeDiploma),
    validarCampos
], diplomasGetById)

module.exports = router;