'use strict';

const express = require('express');

const app = express();

const pins = require('./data/pins_formatted.json');

app.use(express.static(__dirname + '/../react-client/dist/'));

app.get('/getAllPins', (req, res) => {
  res.send(pins);
});

app.get('/getMorePins', (req, res) => {

});

app.listen(process.env.PORT || 5000, () => console.log('Listening on port 5000!'));