'use strict';

var VivofitPing = require('../Models/VivofitPing');

exports.storePings = function (req, res) {

    req.forEach(element => {

        VivofitPing.set_VivofitPings(req.params.type, element);

    });

    
    return res.sendStatus(200);
};