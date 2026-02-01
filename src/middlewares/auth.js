const httpStatusCodes = require('http-status-codes');
const logger = require('../loggers/logger');
const authentictor = function (req, res, next) {
  const authHeader = req.headers['authorisation'];
  if (authHeader !== process.env.AUTH_HEADER) {
    res.statusCode = httpStatusCodes.StatusCodes.UNAUTHORIZED;
    res.status = httpStatusCodes.ReasonPhrases.UNAUTHORIZED;
    res.send(httpStatusCodes.ReasonPhrases.UNAUTHORIZED);
    logger.info(`Authentication failed: ${req.path}`);
    return;
  }
  logger.info(`Api Authenticated: ${req.path}`);
  next();
};

module.exports = authentictor;
