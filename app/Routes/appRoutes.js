var express = require('express');
var router = express.Router();

/* All Controllers required in this route - Place it below */

var vivofitPingController = require('../Controllers/vivofitPingController');

/* Routes Starts from here */

router.post('/garmin/vivofit/ping/:type', vivofitPingController.storePings);

/* Routes Ends here */

module.exports = router;