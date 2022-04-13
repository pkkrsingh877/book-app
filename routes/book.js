const express = require('express');
const router = express.Router();
const path = require('path');

router.post('/', (req, res) => {
    const { bookName, bookAuthor, bookImage } = req.body;
    console.log(bookName, bookAuthor, bookImage);
    res.redirect('/books');
});

router.get('/add', (req, res) => {
    res.render('book/addBook');
});

router.get('/', (req, res) => {
    res.render('book/index');
});

module.exports = router;