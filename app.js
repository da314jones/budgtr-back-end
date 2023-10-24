const express = require("express");
const cors = require("cors");
const transactions = require('./controllers/transactionsController'); 
const users = require("./controllers/usersController")
const app = express();

app.use(express.json());
app.use(cors());

// Welcome route
app.get("/", (req, res) => {
    res.send("Welcome to the BudgetErr server");
});

app.use("/transactions", transactions);
app.use("/users", users)

// Middleware error handling always at the bottom of the stack
app.use((err, req, res, next) => {
    res.status(500).json({ error: err.message });
  });
// Error handling code here

app.get("*", (req, res) => {
    res.status(404).json({error: "no page found"});
});

module.exports = app;
