'use strict';

const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config();

// Create a connection pool
const pool = mysql.createPool({
    host: process.env.RDS_HOST,
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    database: process.env.RDS_DATABASE,
    connectionLimit: 10
});

// Retry the database connection up to 3 times
async function getConnection() {
    for (let i = 0; i < 3; i++) {
        try {
            return await pool.getConnection();
        } catch (err) {
            console.error(`Failed to connect to the database: ${err}`);
            if (err.code === 'ETIMEDOUT' && i < 2) {
                console.log(`Retrying the database connection (attempt ${i + 1})...`);
                continue;
            } else {
                throw err;
            }
        }
    }
}

module.exports = { pool, getConnection };