const router = require('express').Router();
const controllers = require('../controllers/get');

router.get('/', controllers.get);

module.exports = router;
