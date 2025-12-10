const express = require('express')
const router = express.Router()
const movieControllers = require('../controllers/movieController')



router.get('/', movieControllers.index );

// show
router.get('/:id', movieControllers.show);

module.exports = router 