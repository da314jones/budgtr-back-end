const express = require("express");
const models = require('./models/models');
const createTransaction = require("./controllers/createController");
const readTransaction = require("./controllers/readController");
const updateTransaction = require("./controllers/updateController");
const removeTransaction = require("./controllers/deleteController");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// Welcome route
app.get("/", (req, res) => {
    res.send("Welcome to the BudgetErr server");
});

// Index route shows all transactions
app.get("/transactions", (req, res) => {
    res.json(models);
});

// Show route for a single transaction based on a wildcard identifier
app.get("/transactions/:index", readTransaction);

// Create route
app.post("/transactions", createTransaction);

// Update route
app.put("/transactions/:index", updateTransaction);

// Delete route
app.delete("/transactions/:index", removeTransaction);

// Middleware error handling always at the bottom of the stack
app.get("/:index", (req, res) => {
    const { index } = req.params;
    if (index >= 0 && index < models.length) {
        res.status(200).json(models[index]);
    } else {
        res.status(500).send('show server');
    }
});

module.exports = app;
