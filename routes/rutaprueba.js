const express = require('express');
const router = express.Router();
const {testcontroller2} = require('../controllers/testcontroller2');
const {postPrueba} = require('../controllers/Prueba/postController');
const {getPrueba} = require('../controllers/Prueba/getController');


router.get('/prueba2',
    testcontroller2
)

// post
router.post('/post',
   postPrueba 
)

// get
router.get('/get',
   postPrueba 
)

module.exports = router;
