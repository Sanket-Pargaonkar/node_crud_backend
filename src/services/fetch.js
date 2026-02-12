const query = require('../db/query');
const logger = require('../loggers/logger');

const fetch = {
  fetchTop: async function () {
    try {
      logger.info(`Invoking src/services/fetch.fetchTop`);
      const [res] = await query('SELECT * FROM data LIMIT 1');
      return res;
    } catch (e) {
      logger.error(e);
      throw e;
    }
  },
};

module.exports = fetch;
