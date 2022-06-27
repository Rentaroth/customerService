const router = require('express').Router();

const controller = require('./controller');

router.post('/', controller.billGeneration);
router.get('/', controller.billFinding);
router.get('/:id', controller.billFinding);
router.put('/:id', controller.billEditting);
router.delete('/:id', controller.billDeleting);

module.exports = router;