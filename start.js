require('dotenv').config();

const app = require('./app');

let port = process.env.PORT;
// port = ''
if (port == null || port === '') {
  port = 8081;
}

app.listen(port, () => {
  console.log(`server started successfully on port ${port}`);
});
