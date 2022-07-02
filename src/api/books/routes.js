const router = require('express').Router();

const controller = require('./controller');

router.post('/', controller.bookCreation);
router.get('/', controller.bookReading);
router.get('/:id', controller.bookReading);
router.put('/:id', controller.bookUpdating);
router.delete('/:id', controller.bookDeleting);

module.exports = router;