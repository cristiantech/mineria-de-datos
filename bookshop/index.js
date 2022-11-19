const express = require( 'express');
const routerApi = require('./routes');
const app = express();


app.use(express.json())
routerApi(app);

app.listen(3001, () => {
    console.log('excuchando en el puerto 3001');
});
