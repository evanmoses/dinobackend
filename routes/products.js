const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('you have reached the products endpoint');
});

module.exports = router;
