 const app = require('./app');

 required("dotenv").config();

 const PORT = process.env.PORT || 4000;

 app.listen(port, () => {
    console.log('The Budget App Server is running on http://localhost:${port}/')
});