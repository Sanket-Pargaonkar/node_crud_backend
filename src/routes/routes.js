const router = require('express').Router();
const httpStatusCodes = require('http-status-codes');

router.get('/', (req, res) => {
  res.status(httpStatusCodes.StatusCodes.OK);
  res.send(httpStatusCodes.ReasonPhrases.OK);
});

module.exports = router;
