const express = require('express');
const serverless = require('serverless-http');
const path = require('path')
const ejs = require('ejs');
const ejsMate = require('ejs-mate');

const app = express();
app.engine ('ejs', ejsMate )

app.set('views', path.join(__dirname, '/views'));
app.use( express.static(path.join(__dirname,'/views/seeds')));
app.use( express.static(path.join(__dirname,'/public')));
// Todo Erika fix path das imagens.
// app.use( express.static(path.join(__dirname,'/public/images')));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index.ejs');
});

module.exports.handler = serverless(app);

