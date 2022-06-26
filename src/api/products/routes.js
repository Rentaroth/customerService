const router = require('express').Router();
const controller = require('./controller');

router.get('/', controller.getProducts);
router.get('/:id', controller.getProducts);
router.post('/', controller.createNewProduct);
router.put('/:id', controller.updateOneProduct);
router.delete('/:id', controller.deleteAProduct);

module.exports = router;
