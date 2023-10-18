const faker = require("faker");
const { nanoid } = require("nanoid");
const { writeJSONFile } = require('../helper/helpers')

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const populateDatabase = () => {
    const transactions = [];

    for (let i = 0; i < 50; i++) {
      transactions.push({
        id: nanoid(4), // Generate a unique ID for the transaction
        item_name: faker.commerce.productName(),
        amount: parseFloat(faker.finance.amount()),
        date: faker.date.recent().toLocaleDateString(),
        from: faker.company.companyName(),
        category: faker.random.arrayElement([
          "savings",
          "groceries",
          "rent/mortgage",
          "income",
          "utilities",
          "transportation",
          "health",
          "dining_out",
          "education",
          "entertainment",
          "personal_care",
          "investments",
          "insurance",
          "home_improvement",
          "electronics",
          "travel",
          "gifts_and_donations",
          "pets",
          "clothing_and_accessories",
          "subscriptions",
          "miscellaneous",
        ]),
      });
    }
    console.log(transactions);
    return transactions;
  };


writeJSONFile('../data', 'transaction.json', transactions);
return transactions

module.exports = {
    populateDatabase,
};
