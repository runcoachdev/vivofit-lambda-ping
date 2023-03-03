'use strict';

var VivofitPing = require('../Models/VivofitPing');

exports.storePings = async function (req, res) {
    var allowedHosts = ['localhost:3000', '6cd4lxrtha3dxjqldlu3nz6ppq0svkcw.lambda-url.us-west-2.on.aws', 'apis.garmin.com']

    if(allowedHosts.includes(req.get('host'))) {
        var data = req.body
    
        await VivofitPing.set_VivofitPings(req.params.type, data, res, function (cb) {
            console.log(" callback function through...", cb);
        });
        
        return res.sendStatus(200);
    } else {
        return res.sendStatus(400)
    }

};