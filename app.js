const express = require('express');
const models = require("./models/models");
const createTransaction = require("./controllers/createController");
const readTransaction = require('./controllers/readController');
const updateTransaction = require('./controllers/updateController');
const removeTransaction = require('./controllers/deleteController');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to the BudgetErr server');
});
// index route shows all transactions
app.get("/transactions", (req, res) => {
    res.json(models);
});

// show route for a single transaction based on a 'wildcard'
app.get("/transactions/:index", readTransaction);

// create
app.post("./transaction", createTransaction);

// update
app.put("/transaction/:index", updateTransaction);

// delete route
app.delete("./transaction/:index", removeTransaction);

// middleware error handling always at the bottom
app.get("./:index", (req, res) => {
    const{ index }
 = req.params;
if (index >= 0 && index < models.length) {
    res.status(200).json(models[index]) 
} else {
        res.status(404).redirect('/404', "show server");
    };
});


module.exports = app;