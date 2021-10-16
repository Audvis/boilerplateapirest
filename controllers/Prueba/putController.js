const Prueba = require('../../database/models/Prueba');

exports.putPrueba = async (req, res) => {
    const { id } = req.params;
    const {
        name, description
    } = req.body;

    try {
        const result = await Prueba.update({
            name, description
        }, {
            where: {
                id
            }
        })

        res.json({ msg: 'La prueba se actualizo correctamente', prueba: result })

    } catch (error) {
        res.json({ msg: 'Error al actualizar la prueba', error: error })
    }
}
