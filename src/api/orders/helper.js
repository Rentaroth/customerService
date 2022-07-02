const entity = require('./entity');

const Joi = require('joi');
const { customAlphabet } = require('nanoid');
const nanoid = customAlphabet('1234567890', 10);

const createOrder = async (data) => {
  const validationSchema = Joi.object({
    billId: Joi.string().optional(),
    productsId: Joi.string().optional(),
  });

  const validation = await validationSchema.validate(data);
  const info = {
    id: await nanoid(),
    ...validation.value,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  try {
    const order = new entity(info);
    const result = await order.create();
    return result;
  } catch (error) {
    return console.error(error);
  }
};

const findOrders = async (id) => {
  const validationSchema = Joi.object({
    id: Joi.string().optional(),
  });

  const validation = await validationSchema.validate({ id });

  try {
    const orders = new entity(validation);
    const result = await orders.read();
    return result;
  } catch (error) {
    console.error(error);
  }
};

const updateOrder = async (data) => {
  const validationSchema = Joi.object({
    id: Joi.string().required(),
    billId: Joi.string().optional(),
    productsId: Joi.string().optional(),
  });
  const validation = await validationSchema.validate(data);
  try {
    const order = new entity(validation.value);
    return order.update();
  } catch (error) {
    console.error(error);
  }
};

const deleteOrder = async (id) => {
  const validationSchema = Joi.object({
    id: Joi.string().optional(),
  });

  const validation = await validationSchema.validate({ id });
  try {
    const order = new entity(validation.value);
    return order.erase();
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  createOrder,
  findOrders,
  updateOrder,
  deleteOrder,
};
