const router = require('express').Router();
const controller = require('./controller');

router.get('/', controller.getUser);
router.get('/:id', controller.getUser);
router.post('/', controller.userCreator);
router.put('/:id', controller.updateOneUser);
router.delete('/:id', controller.deleteOneUser);

module.exports = router;
