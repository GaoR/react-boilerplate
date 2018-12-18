const express = require('express');
const cors = require('cors');
const path = require('path');
// const bodyParser = require('body-parser');

const app = express();
app.use(cors());
// app.use(bodyParser.json());

app.get('/bundle.js', (req, res) => {
  res.sendFile(path.resolve('public/bundle.js'));
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve('public/index.html'));
});

const port = 8008;

app.listen(port, () => { console.log(`Listening on port ${port}!`); });
