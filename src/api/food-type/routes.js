const router = require('express').Router();
const controller = require('./controller');

router.get('/', controller.typeReading);
router.get('/:id', controller.typeReading);
router.post('/', controller.typeCreation);
router.put('/:id', controller.typeUpdating);
router.delete('/:id', controller.typeDeleting);

module.exports = router;
