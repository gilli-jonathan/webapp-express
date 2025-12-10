const mysql = require('mysql2')

const connection = mysqul.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

connection.connect((err) => {
    if (err) throw err;
    console.log('non funziona... sfigato');
});

module.exports = connection