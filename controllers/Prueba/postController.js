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
    } catch (error) {
        res.send({response:'La prueba no se creo!!!',error:error});
    }
    

}