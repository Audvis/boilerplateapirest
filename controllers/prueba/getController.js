const Prueba = require('../../database/models/Prueba');



exports.getController = async (req,res) => {

    const consult = await Prueba.findAll({
        attributes:[
            "name",
            "description",
        ]
    });

    res.json(consult)
}

