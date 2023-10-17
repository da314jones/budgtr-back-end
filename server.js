 const app = require('./app');
 const port = 4000;

 app.listen(port, () => {
    console.log('The Budget App Server is running on http://localhost:${port}/')
});