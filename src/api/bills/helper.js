const Joi = require('joi');
const { customAlphabet } = require('nanoid');
const nanoid = customAlphabet('1234567890', 10);

const entity = require('./entity');

const generateNewBill = async (data) => {
  const validationSchema = Joi.object({
    total: Joi.number().integer().required(),
    bookId: Joi.string().required(),
    cashierId: Joi.string().required(),
    cashierAdminId: Joi.string().required(),
  });

  const validation = await validationSchema.validateAsync(data);
  const id = await nanoid(10);
  const createdAt = new Date();
  const updatedAt = new Date();
  const info = {
    id,
    ...validation,
    createdAt,
    updatedAt,
  };
  const Bill = new entity(info);
  try {
    const result = await Bill.generateBill();
    return result;
  } catch (error) {
    console.error(error);
  }
};

const getGeneratedBills = async (id) => {
  const validationSchema = Joi.object({
    id: Joi.string().optional(),
  });
  const validation = await validationSchema.validateAsync({ id });
  const Bill = new entity(validation);
  try {
    const result = await Bill.getBills();
    return result;
  } catch (error) {
    console.error(error);
  }
};

const editBill = async (id, data) => {
  const validationSchema = Joi.object({
    id: Joi.string().required(),
    total: Joi.number().integer().required(),
    bookId: Joi.string().required(),
    cashierId: Joi.string().required(),
    cashierAdminId: Joi.string().required(),
  });
  const info = {
    id,
    ...data,
  };
  const validation = await validationSchema.validateAsync(info);
  const Bill = new entity(validation);
  try {
    const result = await Bill.updateBill();
    return result;
  } catch (error) {
    console.error(error);
  }
};

const deleteABill = async (id) => {
  const validationSchema = Joi.object({
    id: Joi.string().optional(),
  });
  const validation = await validationSchema.validateAsync({ id });
  const Bill = new entity(validation);
  try {
    const result = await Bill.deleteBill();
    return result;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  generateNewBill,
  getGeneratedBills,
  editBill,
  deleteABill,
};
