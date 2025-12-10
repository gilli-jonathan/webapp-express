const connection = require('../database/connection') 

const index = (req, res)=> {
    
    const sql = 'SELECT * FROM movies';

    connection.query(sql, (err, resu) => {
         if (err) {
        return res.status(500).json({
        error: 'il database ha fallito'})
    };

    req.json(resu)

    })
}

const show = (req, res)=> {

    const id = req.params.id
    
    const sql = 'SELECT * FROM movies WHERE id = ?';

    const review = `SELECT reviews.* 
FROM movies
JOIN reviews
ON reviews.movie_id = movies.id
WHERE reviews.movie_id = ?`

    connection.query(sql, [id], (err, resu) => {
        if (err) return res.status(500).json({
            error: 'mi spiace oggi leggerai un libro, anzichè guardare un film'
        });
        if (resu.length === 0) return res.status(404).json({error: 'non va'});


        res.json(resu[0])
    })

};

module.exports = {
    index,
    show
}