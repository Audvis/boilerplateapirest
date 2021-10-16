const Ticket = require('../../database/models/Prueba');

exports.getPrueba = async (req,res) => {
    try {
        let pruebas = await Prueba.findAll({
            attributes: ['id','name', 'description']
        })
        res.json(pruebas)
    } catch (error) {
        res.send(res.send({response:'no hay pruebas o error',error:error}))
    }
}