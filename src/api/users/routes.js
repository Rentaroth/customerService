const router = require('express').Router();
const controller = require('./controller');

router.get('/:id', controller.getAllUsers);
router.get('/', controller.getAllUsers);
router.post('/', controller.userCreator);
router.put('/:id', controller.updateOneUser);
router.delete('/:id', controller.deleteOneUser);

module.exports = router;
