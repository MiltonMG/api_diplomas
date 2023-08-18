const { validationResult } = require("express-validator");
const Diploma = require("../models/diploma");

//Middleware para retornar todos los errores encontrados
const validarCampos = ( req, res, next ) => {
    const errors = validationResult( req );
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }

    next();
}

//Existe producto por id
const existeDiploma = async (dui) => {

    if (Number(dui)) {//Validamos que el id sea un numero, sino lo es otro middleware alertara.
        const exite = await Diploma.findOne({dui})
        if ( !exite ) {
            throw new Error(`El dui ${dui} no existe`)
        }
    }

}

module.exports = {
    validarCampos,
    existeDiploma
}