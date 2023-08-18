const { Schema, model } = require("mongoose")


//Esquema sobre como se guardara el producto en la base de datos.

/**
 * NOTA: Todos los campos que en la prueba se indicaban son requeridos, excepto timestamp
 */
const DiplomaSchema = Schema({
    
    dui: {
        type: String,
        require: [true, 'El dui es obligatorio'],
        unique: true
    },
    nombre: {
        type: String,
        require: [true, 'El nombre es obligatorio']
    },
    unidades: {
        type: Array,
        require: [true, 'El numero de unidades valorativas es obligatorio']
    },
    curso: {
        type: String,
        require: [true, 'el nombre del curso es obligatorio']
    },
    horas: {
        type: String,
        require: [true, 'El numero de horas del curso es obligatorio']
    }
});

/*
sobrescribimos el metodos toJSON para quitar ciertos datos que no queremos enviar al
realizar peticion al endpoint, esto se envia donde se llama res.json(), esto esta en los controladores de las rutas
*/
DiplomaSchema.methods.toJSON = function() {

    //desestructuramos lo que viene en toObject() [Aca viene la data del endpoint]
    const { __v, _id, ...diploma } = this.toObject();

    return diploma;
}


module.exports = model( 'Diploma', DiplomaSchema );