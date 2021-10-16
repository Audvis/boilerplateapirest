const express = require('express');
const router = express.Router();
const {testcontroller2} = require('../controllers/testcontroller2');


router.get('/prueba2',
    testcontroller2
)

module.exports = router;
