const express = require('express');
const app = express();
const port = 3000;

//ejs setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//routes setup
const bookRoutes = require('./routes/book');
app.use('/book', bookRoutes);

app.get('/', (req, res) => {
    res.send('index');
});

app.listen(port, () => {
    console.log('App is listening at port ', port);
});