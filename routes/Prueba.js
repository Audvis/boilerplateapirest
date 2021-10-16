const express = require('express');
const router = express.Router();
const { 
    getController,              
} = require('../controllers/Prueba/getController');


//GET
router.get('/get',getController);



module.exports = router;
