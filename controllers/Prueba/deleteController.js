const Prueba = require('../../database/models/Prueba');

exports.deletePrueba = async (req,res) => {
    const { id } = req.params
    try {
     let prueba = await Prueba.destroy({
        where: {
            id
        }
    })
    res.send({response:'Prueba Borrada',prueba:prueba})
    } catch (error) {
        res.json({response:'Error al borrar la prueba',error:error})
    }
}