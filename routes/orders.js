const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('you have reached the orders endpoint');
});

module.exports = router;
