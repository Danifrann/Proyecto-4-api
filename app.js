const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const reservasController = require('./controllers/reservas.controllers');
require('dotenv').config();

app.use(bodyParser.json());
app.use('/api', reservasController);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});