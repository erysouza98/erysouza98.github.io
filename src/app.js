const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const morgan = require('morgan');
const serverless = require('serverless-http');


const app = express();


app.engine ('ejs', ejsMate )
app.set ('view engine', 'ejs');
app.set('views', 'src/views');
app.set('public', 'src/public');
// mongoose.connect('mongodb://localhost:3000/portfolio');
app.use(express.urlencoded ({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname,'')));
app.use(morgan('tiny'))
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home')
});



// app.listen(9000, () =>{
//     console.log("Listening on port 9000!")
// })

app.use(`/.netlify/functions/app`, router);

module.exports = app;
module.exports.handler = serverless(app);