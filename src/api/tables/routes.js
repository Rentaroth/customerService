const router = require('express').Router();
const controller = require('./controller');

router.post('/', controller.tabeCreation);
router.get('/', controller.tableReading);
router.get('/:id', controller.tableReading);
router.put('/:id', controller.tableUpdating);
router.delete('/:id', controller.tableDeleting);

module.exports = router;
