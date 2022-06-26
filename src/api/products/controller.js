const helper = require('./helper');

const getProducts = async (req, res) => {
  if (req.params.id) {
    const { id } = req.params;
    const result = await helper.getProducts(id);
    return res.send(result).status(200);
  }
  const result = await helper.getProducts();
  return res.send(result).status(200);
};

const createNewProduct = async (req, res) => {
  const { product } = req.body;
  const result = await helper.createProduct(product);
  return res.send(result).status(200);
};

const updateOneProduct = async (req, res) => {
  const { id } = req.params;
  const { data } = req.body;
  await helper.updateProduct(id, data);
  return res.send({ body: 'Done!' }).status(200);
};

const deleteAProduct = async (req, res) => {
  const { id } = req.params;
  await helper.deleteProduct(id);
  return res.send({ body: 'Done!' }).status(200);
};

module.exports = {
  getProducts,
  createNewProduct,
  updateOneProduct,
  deleteAProduct,
};
