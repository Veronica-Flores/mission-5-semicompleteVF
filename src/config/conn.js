const mysql = require('mysql2');
require('dotenv').config(); //requerimos el modulo dotenv

const pool = mysql.createPool({
    port: process.env.DBPORT,
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.DBPASS,
    database: process.env.DB,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = {
    conn: pool.promise()
};