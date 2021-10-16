const Prueba = require('../../database/models/Prueba');

exports.postPrueba = async (req,res) => {
    const { 
        name,         
        description
    } = req.body;

    try {
        const prue = await Prueba.create({
            name,         
            description
        })
        res.json({response:'La prueba se creo con exito!!!',prueba:prue});
    } catch (error) {
        res.json({response:'La prueba no se creo!!!',error:error});
    }
    

}