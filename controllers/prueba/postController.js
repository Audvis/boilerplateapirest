const Prueba = require('../../database/models/Prueba');


exports.postController = async (req,res) => {
    
    const { 
        name, description      
    } = req.body;

    try {
        const prueba = await Prueba.create({
            name, description   
        });
    
        res.json({
            created:true,
            prueba,
        }) 
        
    } catch (error) {
        console.log(error)
        res.json({msg:'Error', error: error} )
    }
}
