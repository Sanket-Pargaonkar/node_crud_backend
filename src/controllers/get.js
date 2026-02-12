const fetch = require('../services/fetch');
const httpStatusCodes = require('http-status-codes');
const logger = require('../loggers/logger');
module.exports = {
  get: function (req, res) {
    logger.info(`Servicing request for ${req.path}`);
    fetch
      .fetchTop()
      .then(function (data) {
        res.status(httpStatusCodes.StatusCodes.OK);
        res.json(data);
        logger.info(`Request for ${req.path} processed: ${data}`);
      })
      .catch((err) => {
        logger.info(`Error occured while processing req for ${req.path} processed: ${err}`);
        res.status(httpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR);
        return res.send(httpStatusCodes.ReasonPhrases.INTERNAL_SERVER_ERROR);
      });
  },
};
