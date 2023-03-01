'use strict';

const mysql = require('mysql'),
    dotenv = require('dotenv');

dotenv.config();

//local mysql db connection
var connection = mysql.createPool({
    host: process.env.RDS_HOST,
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    database: process.env.RDS_DATABASE,
    connectionLimit: 10
});

module.exports = connection;