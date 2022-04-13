const express = require('express');
const router = express.Router();
const path = require('path');
const client = require('../models/database');

router.post('/', (req, res) => {
    const { bookName, bookAuthor, bookImage } = req.body;
    console.log(bookName, bookAuthor, bookImage);
    res.redirect('/books');
});

router.get('/add', (req, res) => {
    res.render('book/addBook');
});

router.get('/', (req, res) => {
    try {
        client.query('SELECT * FROM books;', (err, result) => {
            if(!err){
                console.log(result.rows);
                const books = result.rows;
                res.render('book/index', { books });
            }else{
                console.log(err);
            }
        });
    } catch (err) {
        console.log(err);
        res.send('error');
    }
});

module.exports = router;