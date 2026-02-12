const pool = require('../configs/db.config');

const query = async function (query, params) {
  const [res, fields] = await pool.query(query, params);
  return [res, fields];
};

module.exports = query;
