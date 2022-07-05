const entity = require('./entity');

const Joi = require('joi');
const { customAlphabet } = require('nanoid');
const nanoid = customAlphabet('1234567890', 10);

const createTable = async (data) => {
  const validatingSchema = Joi.object({
    tableSize: Joi.number().integer().max(15).positive().required(),
  });
  const validation = await validatingSchema.validateAsync(data);
  const info = {
    id: await nanoid(),
    ...validation,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  try {
    const tables = new entity(info);
    return tables.create();
  } catch (error) {
    console.error(error);
  }
};

const readTables = async (id) => {
  const validatingSchema = Joi.object({
    id: Joi.string().optional(),
  });
  const validation = await validatingSchema.validateAsync({ id });
  try {
    const tables = new entity(validation);
    const result = await tables.read();
    return result;
  } catch (error) {
    console.error(error);
  }
};

const updateTables = async (id, data) => {
  const validatingSchema = Joi.object({
    id: Joi.string().required(),
    tableSize: Joi.number().integer().required(),
  });
  const validation = await validatingSchema.validateAsync({ id, ...data });
  const info = {
    id,
    ...validation,
    updatedAt: new Date(),
  };
  try {
    const tables = new entity(info);
    return tables.update();
  } catch (error) {
    console.error(error);
  }
};

const deleteTables = async (id) => {
  const validatingSchema = Joi.object({
    id: Joi.string().optional(),
  });
  const validation = await validatingSchema.validateAsync({ id });
  try {
    const tables = new entity(validation);
    return tables.erase();
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  createTable,
  readTables,
  updateTables,
  deleteTables,
};
