'use strict';

const db = require('./db');

class VivofitPing {
    static async set_VivofitPings(type, data) {
        try {
            const values = [[type, JSON.stringify(data), 0]];
            const sql = 'INSERT INTO t_vivofit_ping(type, response, processed) VALUES ?';

            let conn;
            let result;

            try {
                conn = await db.getConnection();
                result = await conn.query(sql, [values]);

            } catch (err) {
                console.error(`Failed to obtain a database connection: ${err}`);
            } finally {
                if (conn) {
                    conn.release();
                }
            }
            return result;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
}

module.exports = VivofitPing;