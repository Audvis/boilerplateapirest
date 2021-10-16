const express = require('express');
const router = express.Router();
const {testcontroller} = require('../controllers/testcontroller');
const {postPrueba} = require('../controllers/Prueba/postController');
const {getPrueba} = require('../controllers/Prueba/getController');


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

module.exports = router;
