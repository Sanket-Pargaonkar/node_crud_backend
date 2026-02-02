require('dotenv').config();
const express = require('express');
const logger = require('./loggers/logger');
const authentictor = require('./middlewares/auth');
const validateToken = require('./middlewares/validation');
// const routes = require('./routes/routes');
const app = express();
const port = process.env.PORT ? process.env.PORT : 3000;
app.use(authentictor);
app.use(validateToken);
// app.use(routes);

app.get('/health', (req, res) => {
  logger.info(`health encpoint reached ${req.path}`);
  res.statusCode = 200;
  res.send('App is up');
});

app.listen(port, () => {
  logger.info(`Listening on port ${port}`);
});
