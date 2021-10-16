const express = require('express');
const router = express.Router();
const {testcontroller} = require('../controllers/Prueba/testcontroller');
const {postPrueba} = require('../controllers/Prueba/postController');
const {getPrueba} = require('../controllers/Prueba/getController');
const {putPrueba} = require('../controllers/Prueba/putController');
const {deletePrueba} = require('../controllers/Prueba/deleteController');


router.get('/',
    testcontroller
)

// post
router.post('/post',
   postPrueba 
)

// get
router.get('/get',
   getPrueba 
)

// put
router.put('/get/:id',
   putPrueba 
)

module.exports = router;
