const app = require('./app');
const port = process.env.PORT || 8000;
 
const server = app.listen(port, () => {
  console.log('wishlist is listening on port: ' + port);
});
