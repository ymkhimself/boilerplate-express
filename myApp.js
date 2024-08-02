let express = require('express');
let bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.urlencoded({extended: true}))
require('dotenv').config()

module.exports = app;
