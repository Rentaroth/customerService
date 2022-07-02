const router = require('express').Router();

const controller = require('./controller');

router.post('/', controller.orderCreation);
router.get('/', controller.orderFinding);
router.get('/:id', controller.orderFinding);
router.put('/:id', controller.orderUpdating);
router.delete('/:id', controller.orderDeleting);

module.exports = router;
