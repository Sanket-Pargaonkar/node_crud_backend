const logger = require('../loggers/logger');
const httpStatusCodes = require('http-status-codes');
const validateToken = function (req, res, next) {
  const token = req.headers['authorisation'];
  logger.info(`validatingToken for path: ${req.path} `);
  //placeholder validation
  if (token && token.length) {
    logger.info(`access token valid for path: ${req.path} `);
    return next();
  }

  logger.info(`access token invalid for path: ${req.path} `);
  res.status(httpStatusCodes.StatusCodes.UNAUTHORIZED);
  res.send(httpStatusCodes.ReasonPhrases.UNAUTHORIZED);
};

module.exports = validateToken;
