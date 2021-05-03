const createError = require('http-errors');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

require('./router')(app);
// const customersRouter = require('./routes/customers');
// const ordersRouter = require('./routes/orders');
// const productsRouter = require('./routes/products');
// const usersRouter = require('./routes/users');
// const cartsRouter = require('./routes/carts');
//
// const base = process.env.BASE_URL;
//
// app.use('/api/customers', customersRouter);
// app.use(`${base}/orders`, ordersRouter);
// app.use(`${base}/products`, productsRouter);
// app.use(`${base}/users`, usersRouter);
// app.use(`${base}/carts`, cartsRouter);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors);
app.use(bodyParser.urlencoded({ extended: true }));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

let mongoosePort = process.env.CLOUD_DB;

if (mongoosePort == null || mongoosePort === '') {
  mongoosePort = process.env.LOCAL_DB;
}
mongoose.connect(mongoosePort, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const { connection } = mongoose;

connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

module.exports = app;
