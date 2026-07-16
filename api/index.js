const express = require('express');
const cors = require('cors');
const routes = require('../src/router');
const bodyParser = require('body-parser');

require('dotenv/config');
require('pg');
require('../src/database');

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(express.json());

app.use(routes);

module.exports = app;