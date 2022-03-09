
   
const router = require('express').Router(),
routes = require('./src/api');

module.exports = () => {
/**
 * Main routes
 * Looks like:
 * router.use('/[base_url]', routes.middleware)
 */

//router.use('/products', routes.products);
router.use('/health', routes.health);
router.use('/', routes.health);

return router;
};