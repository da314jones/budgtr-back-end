const models = require("../models/models");

const create  = (req, res, next) => {
    const newTransaction = req.body;
    if (!newTransaction.item_name || !amount || !date || !from || !category) {
        const error = new Error("Incomplete data: Please provide all mandatory fields.");
        error.status = 400;
        return next(error);
    }
    models.push(newTransaction);
    console.log("Added new transaction entry");
    res.json(newTransaction);
};




module.exports = create



id: i +1,
item_name:faker.commerce.productName(),
amount:parseFloat(faker.finance.amount()),
date: faker.date.recent().toLocaleDateString(),
from: faker.company.companyName(),
category: faker.random.arrayElement([ 'savings', "groceries", "