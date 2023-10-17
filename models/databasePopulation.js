const faker = require('faker');

const populateDatabase = () => {
    const transactions = [];
    
    for (let i = o; i < 50; i++) {
        transactions.push({
            id: i +1,
            item_name:faker.commerce.productName(),
            amount:parseFloat(faker.finance.amount()),
            date: faker.date.recent().toLocaleDateString(),
            from: faker.company.companyName(),
            category: faker.random.arrayElement([ 'savings', "groceries", "rent/mortgage", 'income',
            'groceries',
            'rent_or_mortgage',
            'utilities',
            'transportation',
            'health',
            'dining_out',
            'education',
            'entertainment',
            'personal_care',
            'investments',
            'insurance',
            'home_improvement',
            'electronics',
            'travel',
            'gifts_and_donations',
            'pets',
            'clothing_and_accessories',
            'subscriptions',
            'miscellaneous' ])
        })
    }
    console.log(transactions);
    return transactions
};

module.exports = populateDatabase