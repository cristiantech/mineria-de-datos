const express = require( 'express');
const BooksService = require('../services/books.service');
const router = express.Router();
const books = new BooksService();

router.get('/', async (req, res) => {
        const books = new BooksService();
        const getbooks = await books.find();
        
});

router.get('/:bookId', async (req, res) => {
    const {bookId} = req.params
    const getbooks = await books.findOne(bookId);
    if(!getbooks){
        res.json({message: "no book"});
    }else{
        res.json(getbooks);
    }
});

router.post('/', async (req, res) => {
    const data = req.body;
    const createBook = await books.created(data);
    res.json(createBook)
});

router.patch('/:id', async (req, res) => {
    const {id} = req.params
    const data = req.body;
    const updateBook = await books.update(id,data);
    res.json(updateBook)
});


module.exports = router;