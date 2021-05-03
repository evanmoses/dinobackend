const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('you have reached the customers endpoint');
});

module.exports = router;
