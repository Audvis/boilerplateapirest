const express = require('express');
const router = express.Router();
const {postPrueba} = require('../controllers/Prueba/postController');
const {getPrueba} = require('../controllers/Prueba/getController');
const {putPrueba} = require('../controllers/Prueba/putController');
const {deletePrueba} = require('../controllers/Prueba/deleteController');

// post
router.post('/post',
   postPrueba 
)

// get
router.get('/get',
   getPrueba 
)

// put
router.put('/put/:id',
   putPrueba 
)

// delete
router.delete('/delete/:id',
   deletePrueba 
)

module.exports = router;
