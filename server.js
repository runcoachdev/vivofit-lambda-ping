const
    serverless = require('serverless-http'),
    express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    app = express(),
    dotenv = require('dotenv');

dotenv.config();

const routes = require('./app/Routes/appRoutes');

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.use('/', routes);

module.exports.handler = serverless(app);

// const port = 3000

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })