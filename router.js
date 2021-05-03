const customersRouter = require('./routes/customers');
const ordersRouter = require('./routes/orders');
const productsRouter = require('./routes/products');
const usersRouter = require('./routes/users');
const cartsRouter = require('./routes/carts');

const base = process.env.BASE_URL;

module.exports = function (app) {
  app.use(`${base}/customers`, customersRouter);
  app.use(`${base}/orders`, ordersRouter);
  app.use(`${base}/products`, productsRouter);
  app.use(`${base}/users`, usersRouter);
  app.use(`${base}/carts`, cartsRouter);
};
