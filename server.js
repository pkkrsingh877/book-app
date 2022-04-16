const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const ejsMate = require('ejs-mate');
const morgan = require('morgan');
const methodOverride = require('method-override');

//middlewares
app.use(express.urlencoded({ extended: false }));
app.use(morgan('tiny'));
app.use(methodOverride('_method'))

//ejs setup
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//routes setup
const bookRoutes = require('./routes/book');
app.use('/books', bookRoutes);

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log('App is listening at port ', port);
});