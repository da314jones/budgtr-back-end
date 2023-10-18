const models = require("../models/models");

const createController = (req, res, next) => {
  const newTransaction = req.body;
  if (
    !newTransaction.item_name ||
    !newTransaction.amount ||
    !newTransaction.date ||
    !newTransaction.from ||
    !newTransaction.category
  ) {
    const error = new Error(
      "Incomplete data: Please provide all mandatory fields."
    );
    error.status = 400;
    return next(error);
  }
  models.push(newTransaction);
  console.log("Added new transaction entry", newTransaction);
  res.json(newTransaction);
};

module.exports = createController;
