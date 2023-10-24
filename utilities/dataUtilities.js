const faker = require('faker');

const transactionTypes = ["Deposit", "Invoice", "Withdrawal", "Payment"];

const transactionCategories = [
  {
    category: "Basic Household Expenses",
    descriptions: [
      "Grocery Shopping", // max 600
      "Rent Payment",
      "Electricity Bill", // max 300
      "Water Bill", // max 100
      "Internet Subscription", // max 150
      "Home Maintenance",
    ],
  },
  {
    category: "Child Care and Education",
    descriptions: [
      "Child's School Supplies", // max 200
      "Tutoring Services", // max 300
      "Daycare Fees", // max 250
      "College Tuition", // max 1200
      "Children's Books", // max 100
    ],
  },
  {
    category: "Utilities",
    descriptions: [
      "Gas Bill", // max 100
      "Phone Bill", // max 150
      "Cable TV Subscription", // max 150,
      "Trash Collection Fee", // max 100
    ],
  },
  {
    category: "Consumer Credit",
    descriptions: [
      "Credit Card Payment",
      "Personal Loan Repayment", // max 500
      "Installment Plan Payment",
    ],
  },
  {
    category: "Miscellaneous Expenses",
    descriptions: [
      "Medical Expenses",
      "Charity Donation", // max 1500
      "Online Shopping", // max 3000
      "Magazine Subscription", // max 50
      "Gift Shop Purchase", // max 100
    ],
  },
  {
    category: "Child-Related Education",
    descriptions: [
      "Adult Education Course", // max 700
      "Children's Educational Toys", // max 200
      "Education Software Purchase", // max 1500
      "Textbooks for Kids", // max 100
    ],
  },
  {
    category: "Pet-Related Expenses",
    descriptions: [
      "Veterinary Visit", // max 400
      "Pet Food Purchase", // max 150
      "Grooming Services", // max 120
      "Pet Supplies", // max 100
    ],
  },
  {
    category: "Coffee Expenses",
    descriptions: [
      "Coffee Shop Visit", // max 75
      "Coffee Beans Purchase", // max 75
      "Coffee Machine Purchase", // max 300
    ],
  },
  {
    category: "Entertainment",
    descriptions: [
      "Movie Tickets", // max 100
      "Concert Tickets", // max 1200
      "Streaming Service Subscription", // max 20
    ],
  },
  {
    category: "Fitness",
    descriptions: [
      "Gym Membership", // max 120
      "Yoga Class Fee", // max 100
      "Sports Equipment Purchase", // max 1500
    ],
  },
  {
    category: "Income",
    descriptions: [
      "Salary Deposit", // max 4200
      "Freelance Earnings", // max 4200
      "Rental Income", // max 4500
      "Dividend Payment", // max 3000
      "Bonus Payment", // max 10000
    ],
  },
  {
    category: "Savings",
    descriptions: [
      "Savings Account Deposit", // max 20% of 4200
      "Investment Contribution", // max 401 contribution
      "Emergency Fund Deposit", // max 100
    ],
  },
  {
    category: "Taxes",
    descriptions: [
      "Income Tax Payment", // max 2200
      "Property Tax Payment", // max 1600
      "Sales Tax Payment", // max 1000
      "Tax Consultant Fee", // max 200
    ],
  },
  {
    category: "Retirement",
    descriptions: [
      "401(k) Contribution", // max 750
      "IRA Contribution", // max 600
      "Pension Fund Deposit", // max 1250
      "Retirement Planning Consultation", // max 100
    ],
  },
];

function getRandomAmount(description) {
  const category = transactionCategories.find((cat) =>
    cat.descriptions.includes(description)
  );

  let maxAmount = 0;

  switch (description) {
    case "Grocery Shopping":
      maxAmount = 600;
      break;
    case "Electricity Bill":
      maxAmount = 300;
      break;
    case "Water Bill":
      maxAmount = 100;
      break;
    case "Internet Subscription":
      maxAmount = 150;
      break;
    case "Child's School Supplies":
      maxAmount = 200;
      break;
    case "Tutoring Services":
      maxAmount = 300;
      break;
    case "Daycare Fees":
      maxAmount = 250;
      break;
    case "College Tuition":
      maxAmount = 1200;
      break;
    case "Children's Books":
      maxAmount = 100;
      break;
    case "Gas Bill":
      maxAmount = 100;
      break;
    case "Phone Bill":
      maxAmount = 150;
      break;
    case "Cable TV Subscription":
      maxAmount = 150;
      break;
    case "Trash Collection Fee":
      maxAmount = 100;
      break;
    case "Credit Card Payment":
      maxAmount = 500;
      break;
    case "Personal Loan Repayment":
      maxAmount = 500;
      break;
    case "Installment Plan Payment":
      maxAmount = 500;
      break;
    case "Medical Expenses":
      maxAmount = 1500;
      break;
    case "Charity Donation":
      maxAmount = 1500;
      break;
    case "Online Shopping":
      maxAmount = 3000;
      break;
    case "Magazine Subscription":
      maxAmount = 50;
      break;
    case "Gift Shop Purchase":
      maxAmount = 100;
      break;
    case "Adult Education Course":
      maxAmount = 700;
      break;
    case "Children's Educational Toys":
      maxAmount = 200;
      break;
    case "Education Software Purchase":
      maxAmount = 1500;
      break;
    case "Textbooks for Kids":
      maxAmount = 100;
      break;
    case "Veterinary Visit":
      maxAmount = 400;
      break;
    case "Pet Food Purchase":
      maxAmount = 150;
      break;
    case "Grooming Services":
      maxAmount = 120;
      break;
    case "Pet Supplies":
      maxAmount = 100;
      break;
    case "Coffee Shop Visit":
      maxAmount = 75;
      break;
    case "Coffee Beans Purchase":
      maxAmount = 75;
      break;
    case "Coffee Machine Purchase":
      maxAmount = 300;
      break;
    case "Movie Tickets":
      maxAmount = 100;
      break;
    case "Concert Tickets":
      maxAmount = 1200;
      break;
    case "Streaming Service Subscription":
      maxAmount = 20;
      break;
    case "Gym Membership":
      maxAmount = 120;
      break;
    case "Yoga Class Fee":
      maxAmount = 100;
      break;
    case "Sports Equipment Purchase":
      maxAmount = 1500;
      break;
    case "Salary Deposit":
      maxAmount = 4200;
      break;
    case "Freelance Earnings":
      maxAmount = 4200;
      break;
    case "Rental Income":
      maxAmount = 4500;
      break;
    case "Dividend Payment":
      maxAmount = 3000;
      break;
    case "Bonus Payment":
      maxAmount = 10000;
      break;
    case "Savings Account Deposit":
      maxAmount = 0.2 * 4200; // 20% of salary deposit
      break;
    case "Investment Contribution":
      maxAmount = 750; // 401(k) contribution
      break;
    case "Emergency Fund Deposit":
      maxAmount = 100;
      break;
    case "Income Tax Payment":
      maxAmount = 2200;
      break;
    case "Property Tax Payment":
      maxAmount = 1600;
      break;
    case "Sales Tax Payment":
      maxAmount = 1000;
      break;
    case "Tax Consultant Fee":
      maxAmount = 200;
      break;
    case "401(k) Contribution":
      maxAmount = 750;
      break;
    case "IRA Contribution":
      maxAmount = 600;
      break;
    case "Pension Fund Deposit":
      maxAmount = 1250;
      break;
    case "Retirement Planning Consultation":
      maxAmount = 100;
      break;
    default:
      maxAmount = 1000;
      break;
  }

  const amount = faker.finance.amount({ max: maxAmount });
  return amount;
}

module.exports = {
  getRandomAmount,
  transactionTypes,
  transactionCategories,
};


