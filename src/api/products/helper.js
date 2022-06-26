const Joi = require('joi');
const { customAlphabet } = require('nanoid');
const nanoid = customAlphabet('1234567890', 10);

const entity = require('./entity');

const createProduct = async (data) => {
  const validatingSchema = Joi.object({
    name: Joi.string(),
    description: Joi.string().allow(''),
    price: Joi.number().integer(),
    type: Joi.string(),
  });

  const validation = validatingSchema.validateAsync(data);

  if (validation) {
    const created_at = new Date();
    const updated_at = new Date();
    const { name, description, price, type } = data;
    const id = await nanoid(10);
    const product = new entity({
      id,
      name,
      description,
      price,
      type,
      created_at,
      updated_at,
    });
    try {
      const result = product.create();
      return result;
    } catch (error) {
      console.error(error);
    }
  }
};

const getProducts = async (id) => {
  const validationSchema = Joi.object({
    id: Joi.string(),
  });
  const validation = await validationSchema.validateAsync({ id });
  const Product = new entity(validation);
  try {
    const result = await Product.find();
    return result;
  } catch (error) {
    console.error(error);
  }
};

const updateProduct = async (id, data) => {
  const validationSchema = Joi.object({
    id: Joi.string(),
    name: Joi.string().optional(),
    description: Joi.string().allow('').optional(),
    price: Joi.number().integer().optional(),
    type: Joi.string().optional(),
  });
  const info = {
    id,
    ...data,
  };
  const validation = await validationSchema.validateAsync(info);
  const updated_at = new Date();
  const { name, description, price, type } = validation;
  const Product = new entity({
    id,
    name,
    description,
    price,
    type,
    updated_at,
  });
  try {
    const result = await Product.update();
    return result;
  } catch (error) {
    console.error(error);
  }
};

const deleteProduct = async (id) => {
  const validationSchema = Joi.object({
    id: Joi.string(),
  });
  const validation = await validationSchema.validateAsync({ id });
  try {
    const Product = new entity(validation);
    const result = await Product.delete();
    return result;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
};
