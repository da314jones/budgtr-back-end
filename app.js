const express = require('express');
const models = require("./models/models");
const createTransaction = require("./controllers/createController");
const readTransaction = require('./controllers/readController');
const updateTransaction = require('./controllers/updateController');
const removeTransaction = require('./controllers/deleteController');
const cors = require('cors');

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the BudgetErr server');
});




module.exports = app;