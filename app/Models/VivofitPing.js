'use strict';
var con = require('./db');

//VivofitPing object constructor
var VivofitPing = function (task) {
};

VivofitPing.set_VivofitPings = function set_VivofitPings(type, data) {

    try {
        var values = [
            [type, data, 0]
        ];

        let sql = 'INSERT INTO t_vivofit_ping(type, response, processed) VALUES ?';
        con.query(sql, [values], function (err, res) {
            if (err) {
                console.log("error: ", err);
            } else {
                result(null, res);
                return res.sendStatus(200);
            }
        });
    } catch (err) {
        console.log(err);
        return res.sendStatus(500);
    }
};

module.exports = VivofitPing;