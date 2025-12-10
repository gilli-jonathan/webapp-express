const express = require('express')
const router = express.Router()



router.get('/', (req, res)=> {
    console.log('tutti i film');
    
})

// show
router.get('/:id', (req, res) => {
    console.log('singolo film');
    
});

module.exports = router 