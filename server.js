const express = require('express')
const app = express()
const PORT = 3000 
const movieRouter = require('./routes/route')

//importo cros per abilitare ciò che serve
const cors = require('cors')
//attivazione del cors

app.use(cors({
    origin: 'http://localhost:5173'
}))

app.use(express.json({}))

app.use(express.static('public'))

app.listen(PORT, ()=> {
    console.log(`Server listening on https://localhost:${PORT}`);
})

app.get('/', (req,res) => {
    res.send('main page movie server')
})

app.use('/api/movies', movieRouter)