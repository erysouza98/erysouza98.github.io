const express = require('express');
const serverless = require('serverless-http');
const ejs = require('ejs');

const app = express();

app.set('views','src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index.ejs');
});

module.exports.handler = serverless(app);