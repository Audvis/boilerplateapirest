const Prueba = require('../../database/models/Prueba');

exports.deletePrueba = async (req,res) => {
    const { id } = req.params
    try {
     let prueba = await Prueba.destroy({
        where: {
            id
        }
    })
    res.send({response:'Ticket Deleted',prueba:prueba})
    } catch (error) {
        res.json(error)
    }
}