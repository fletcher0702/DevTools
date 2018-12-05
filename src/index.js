
import router from './routes/adress';

const express = require('express');
const config = require('../config/default');
require('dotenv').config();

const app = express();

app.use(router);

app.get('/', router);

app.listen(config.port, () => console.log('Listening...'));
