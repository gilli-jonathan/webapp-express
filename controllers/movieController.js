const connection = require('../database/connection') 

const index = (req, res)=> {
    res.send('tutti i film')
}

const show = (req, res)=> {
    res.send('il singolo film con il suo id: ' + req.params.id)
}

module.exports = {
    index,
    show
}