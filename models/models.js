const faker = require('faker');
const transactionTypes = ["Deposit", "Invoice", "Withdrawal", "Payment"];

const transactionCategories = [
  {
    category: "Basic Household Expenses",
    descriptions: [
      "Grocery Shopping",
      "Rent Payment",
      "Electricity Bill",
      "Water Bill",
      "Internet Subscription",
      "Home Maintenance",
    ],
  },
  {
    category: "Child Care and Education",
    descriptions: [
      "Child's School Supplies",
      "Tutoring Services",
      "Daycare Fees",
      "College Tuition",
      "Children's Books",
    ],
  },
  {
    category: "Utilities",
    descriptions: [
      "Gas Bill",
      "Phone Bill",
      "Cable TV Subscription",
      "Trash Collection Fee",
    ],
  },
  {
    category: "Consumer Credit",
    descriptions: [
      "Credit Card Payment",
      "Personal Loan Repayment",
      "Installment Plan Payment",
    ],
  },
  {
    category: "Miscellaneous Expenses",
    descriptions: [
      "Medical Expenses",
      "Charity Donation",
      "Online Shopping",
      "Magazine Subscription",
      "Gift Shop Purchase",
    ],
  },
  {
    category: "Child-Related Education",
    descriptions: [
      "Adult Education Course",
      "Children's Educational Toys",
      "Education Software Purchase",
      "Textbooks for Kids",
    ],
  },
  {
    category: "Pet-Related Expenses",
    descriptions: [
      "Veterinary Visit",
      "Pet Food Purchase",
      "Grooming Services",
      "Pet Supplies",
    ],
  },
  {
    category: "Coffee Expenses",
    descriptions: [
      "Coffee Shop Visit",
      "Coffee Beans Purchase",
      "Coffee Machine Purchase",
    ],
  },
  {
    category: "Entertainment",
    descriptions: [
      "Movie Tickets",
      "Concert Tickets",
      "Streaming Service Subscription",
    ],
  },
  {
    category: "Fitness",
    descriptions: [
      "Gym Membership",
      "Yoga Class Fee",
      "Sports Equipment Purchase",
    ],
  },
  {
    category: "Income",
    descriptions: [
      "Salary Deposit",
      "Freelance Earnings",
      "Rental Income",
      "Dividend Payment",
      "Bonus Payment",
    ],
  },
  {
    category: "Savings",
    descriptions: [
      "Savings Account Deposit",
      "Investment Contribution",
      "Emergency Fund Deposit",
    ],
  },
  {
    category: "Taxes",
    descriptions: [
      "Income Tax Payment",
      "Property Tax Payment",
      "Sales Tax Payment",
      "Tax Consultant Fee",
    ],
  },
  {
    category: "Retirement",
    descriptions: [
      "401(k) Contribution",
      "IRA Contribution",
      "Pension Fund Deposit",
      "Retirement Planning Consultation",
    ],
  },
];

const generateTransactions = (num = 50) => {
  const transactions = [];

  function generateRandomCreditOrDebit() {
    const options = ['credit', 'debit'];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  };

  function formatDateTime(dateObj) {
    return `${dateObj.toLocaleDateString()} ${dateObj.toLocaleTimeString()}`;
  }
  

  for (let i = 0; i < 50; i++) {
    const randomType = transactionTypes[Math.floor(Math.random() * transactionTypes.length)];
    const randomCategory = transactionCategories[Math.floor(Math.random() * transactionCategories.length)];
    const randomDescription = randomCategory.descriptions[Math.floor(Math.random() * randomCategory.descriptions.length)];
    const transaction = {
      id: faker.random.number({ min: 1000000000, max: 9999999999 }),
      category: randomCategory.category,
      type: randomType,
      description: randomDescription,
      amount: faker.finance.amount(),
      date: formatDateTime(faker.date.recent(),)
    };
    transactions.push(transaction);
  }

  return transactions;
};

const models = generateTransactions(); 

module.exports = models;