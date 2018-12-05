
const express = require('express');
const config = require('../config/default');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => res.json({}));

app.listen(config.port, () => console.log('Listening...'));
