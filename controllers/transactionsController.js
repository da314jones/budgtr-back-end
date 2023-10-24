const express = require("express");
const faker = require('faker');
const transactions = express.Router();
const transactionsData = require('../models/models');

transactions.get("/", (req, res) => {
    const limit = parseInt(req.query.limit) || 100;
    console.log("sending all transaction data")
    res.json(transactionsData.slice(0, limit));
})

transactions.get("/:id", (req, res) => {
    const { id } = req.params;
    console.log("Show Route")
    const currentTransaction = transactionsData.find(transaction => transaction.id == id);
    console.log(transactionsData, currentTransaction, id)
    if (currentTransaction) {
        res.status(200).json(currentTransaction)
    } else {
        res.status(404).send("No transaction at that id");
    }
}) 

transactions.post("/", (req, res) => {
    const newTransaction = req.body;
    newTransaction.id = faker.random.number({ min: 1000000000, max: 9999999999 }),
    transactionsData.push(newTransaction);
    res.status(201).json(newTransaction);
});

transactions.delete("/:id", (req,res) => {
    const { id } = req.params
    const currentTransactionIndex = transactionsData.findIndex(transaction => transaction.id == id);
              if (transactionsData[currentTransactionIndex]) {
        const deletedTransaction = transactionsData.splice(currentTransactionIndex, 1)
        res.status(200).json(deletedTransaction[0])
    } else {
        res.status(404).json({error: "Could not locate the transaction to be deleted"})
    }
})

transactions.put("/:id", (req, res) => {
    const { id } = req.params
    const currentTransactionIndex = transactionsData.findIndex(transaction => transaction.id == id);
           if (transactionsData[currentTransactionIndex]) {
        transactionsData[currentTransactionIndex] = req.body
        res.status(200).json((transactionsData[currentTransactionIndex]))
    } else {
        res.status(404).json({error: " Could not locate transaction to be updated"})
    }
})


module.exports =  transactions;