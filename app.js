const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const morgan = require('morgan');
const Game = require('./seeds/game')





const app = express();


app.engine ('ejs', ejsMate )
app.set ('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// mongoose.connect('mongodb://localhost:3000/portfolio');
app.use(express.urlencoded ({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'')));
app.use(morgan('tiny'))

app.get('/', (req, res) => {
    res.render('home')
});



app.listen(3000, () =>{
    console.log("Listening on port 3000!")
})
