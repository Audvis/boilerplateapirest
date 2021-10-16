const express = require('express');
const router = express.Router();
const {postPrueba} = require('../controllers/Prueba/postController');
const {getPrueba} = require('../controllers/Prueba/getController');


// post
router.post('/post',
   postPrueba 
)

// get
router.get('/get',
   getPrueba 
)


module.exports = router;
