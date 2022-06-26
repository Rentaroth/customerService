const router = require('express').Router();
const routes = require('./src/api');

module.exports = () => {
  /**
   * Main routes
   * Looks like:
   * router.use('/[base_url]', routes.middleware)
   */

  // router.use('/products', routes.products);
  router.use('/health', routes.health);
  router.use('/', routes.health);
  router.use('/users', routes.users);
  router.use('/types', routes.types);
  router.use('/products', routes.products);

  return router;
};
