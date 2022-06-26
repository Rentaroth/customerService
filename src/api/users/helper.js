const Joi = require('joi');
const { customAlphabet } = require('nanoid');
const nanoid = customAlphabet('1234567890', 10);

const Users = require('./entity');

const createValidatedUser = async function (params) {
  const validatingSchema = Joi.object({
    firstName: Joi.string().max(10),
    lastName: Joi.string().max(10),
    idNumber: Joi.number().integer().precision(15),
    password: Joi.string(),
    roleId: Joi.number(),
  });

  const validation = validatingSchema.validate(params);
  const created_at = new Date();
  const updated_at = new Date();
  let entity;
  if (validation) {
    const info = {
      id: await nanoid(10),
      ...validation.value,
      created_at,
      updated_at,
    };
    entity = new Users(info);
    try {
      const result = await entity.createUser();
      return result;
    } catch (error) {
      console.error(error);
    }
  }
};

const getUsersStored = async function (id) {
  const validatingSchema = Joi.object({
    id: Joi.string().optional(),
  });
  const validation = await validatingSchema.validateAsync({ id });
  const entity = new Users(validation);
  return entity.getUsers();
};

const deleteUser = async function (id) {
  const validatingSchema = Joi.object({
    id: Joi.string().optional(),
  });
  const validation = await validatingSchema.validateAsync({ id });
  const entity = new Users(validation);
  return entity.deleteUser();
};

const updateUser = async (id, data) => {
  const validatingSchema = Joi.object({
    id: Joi.string(),
    firstName: Joi.string().max(10).optional(),
    lastName: Joi.string().max(10).optional(),
    idNumber: Joi.number().integer().precision(15).optional(),
    password: Joi.string().optional(),
    roleId: Joi.number().optional(),
  });

  const info = {
    id,
    ...data,
  };
  const validation = await validatingSchema.validateAsync(info);
  try {
    const updated_at = new Date();
    const params = {
      ...validation,
      updated_at,
    };
    const entity = new Users(params);
    return entity.updateUser();
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  createValidatedUser,
  getUsersStored,
  deleteUser,
  updateUser,
};
