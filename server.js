//  const { populateDatabase } = require('./models/populateDatabase');
// populateDatabase();

// Rest of your server initialization...

 const app = require('./app');

 require("dotenv").config();

 const PORT = process.env.PORT || 4000;

 app.listen(PORT, () => {
    console.log(`The Budget App Server is running on http://localhost:${PORT}/`)
});