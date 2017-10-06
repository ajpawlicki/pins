'use strict';

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const pins = require('./data/pins_formatted.json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/../react-client/dist/'));

app.get('/getAllPins', (req, res) => {
  res.send(pins);
});

const increment = 8;

app.get('/getMorePins', (req, res) => {
  const index = +req.query.index;

  res.send(pins.slice(index, index + increment));
});

app.listen(process.env.PORT || 5000, () => console.log('Listening on port 5000!'));