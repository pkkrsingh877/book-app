const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const ejsMate = require('ejs-mate');

//middlewares
app.use(express.urlencoded({ extended: false }));

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