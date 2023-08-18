const { response, request } = require('express')
const Diploma = require('../models/diploma.js')



const diplomasGetById = async(req = request, res = response) => {
    
    //Obteniendo id para realizar GET por id
    const { dui } = req.params;
    // console.log(dui);

    //Obteniendo la informacion de la base de datos
    try {
        const diploma = await Diploma.findOne({dui});
        
        // console.log(diploma);

        //Mensaje de respuesta
        if (diploma) {
            
            res.json({
                diploma
            });        
        }else{
            res.json({
                msg:"El diploma no se encontro"
            })
        }
    } catch (error) {
        console.log(error);
        res.json({
            error:"ocurrio un error"
        }); 
    }



}



module.exports = {
    diplomasGetById
}