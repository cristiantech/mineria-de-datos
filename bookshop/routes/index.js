const express = require('express');
const bookRouter = require('./books.router');
const routerApi = (app) => {
    app.use('/books', bookRouter);
}


module.exports = routerApi