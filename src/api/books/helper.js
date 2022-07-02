const entity = require('./entity');

const Joi = require('joi');
const { customAlphabet } = require('nanoid');
const nanoid = customAlphabet('1234567890', 10);

const createBook = async (data) => {
  const validatigSchema = Joi.object({
    tableId: Joi.string(),
    from: Joi.date().timestamp(),
    to: Joi.date().timestamp(),
  });
  const validation = await validatigSchema.validate(data);
  const id = await nanoid();
  const createdAt = new Date();
  const updatedAt = new Date();
  const info = {
    id,
    ...validation.value,
    createdAt,
    updatedAt,
  };
  try {
    const book = new entity(info);
    return book.create();
  } catch (error) {
    console.error(error);
  }
};

const readBooks = async (id) => {
  const validatigSchema = Joi.object({
    id: Joi.string().optional(),
  });
  const validation = await validatigSchema.validate({ id });
  try {
    const book = new entity(validation.value);
    const result = await book.read();
    return result;
  } catch (error) {
    console.error(error);
  }
};

const updateBooks = async (id, data) => {
  const validatigSchema = Joi.object({
    id: Joi.string(),
    tableId: Joi.string().optional(),
    from: Joi.date().timestamp().optional(),
    to: Joi.date().timestamp().optional(),
  });
  const info = {
    id,
    ...data,
    updatedAt: new Date(),
  };
  const validation = await validatigSchema.validate(info);
  try {
    const book = new entity(validation.value);
    return book.update();
  } catch (error) {
    console.error(error);
  }
};

const deleteBook = async (id) => {
  const validatigSchema = Joi.object({
    id: Joi.string().optional(),
  });
  const validation = await validatigSchema.validate({ id });
  try {
    const book = new entity(validation.value);
    return book.erase();
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  createBook,
  readBooks,
  updateBooks,
  deleteBook,
};
