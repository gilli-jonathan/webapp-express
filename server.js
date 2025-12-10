const express = require('express')
const app = express()
const PORT = 3000 

app.use(express.json({}))

app.use(express.static('public'))

app.listen(PORT, ()=> {
    console.log(`Server listening on https://localhost:${PORT}`);
})

app.get('/', (req,res) => {
    res.send('main page movie server')
})