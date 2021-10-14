const express = require('express');
const router = express.Router();
const { 
    getController,              
} = require('../controllers/Prueba/getController');

const {
    postController,
} = require('../controllers/Prueba/postController');

// const {
//     putController
// } = require('../controllers/Prueba/putController');

// const {
//     deleteController
// } = require('../controllers/Prueba/deleteController');



//GET
router.get('/get',getController);

//POST
router.post('/post',postController);

//PUT
// router.put('/put/:id',putController)

//DELETE
// router.delete('/delete/:id',deleteController)


module.exports = router;