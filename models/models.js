const faker = require('faker');
const { getRandomAmount, transactionTypes, transactionCategories } = require('../utilities/dataUtilities');

const generateTransactions = (num = 10) => {
  const transactions = [];

  function generateRandomCreditOrDebit() {
    const options = ['credit', 'debit'];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  }

  for (let i = 0; i < 50; i++) {
    const randomType = transactionTypes[Math.floor(Math.random() * transactionTypes.length)];
    const randomCategory = transactionCategories[Math.floor(Math.random() * transactionCategories.length)];
    const randomDescription = randomCategory.descriptions[Math.floor(Math.random() * randomCategory.descriptions.length)];

    const amount = getRandomAmount(randomDescription);

    const transaction = {
      transactionId: faker.random.uuid(),
      category: randomCategory.category,
      type: randomType,
      description: randomDescription,
      amount: amount,
      date: faker.date.recent(),
    };
    transactions.push(transaction);
  }

  return transactions;
};

const models = generateTransactions(100); 

module.exports = models;
