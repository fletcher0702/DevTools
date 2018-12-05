
const express = require('express');

require('dotenv').config();

const app = express();

app.get('/', (req, res) => res.json({}));

app.listen(process.env.PORT || 3000, () => console.log('Listening...'));
