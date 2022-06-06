const Users = require('./entity');
const Joi = require('joi');

const createValidatedUser = async function (
  firstName,
  lastName,
  idNumber,
  password,
  roleId,
) {
  const validatingSchema = Joi.object({
    firstName: Joi.string().max(10),
    lastName: Joi.string().max(10),
    idNumber: Joi.number().integer().precision(15),
    password: Joi.string(),
    roleId: Joi.number(),
  });

  const validation = validatingSchema.validate({
    firstName,
    lastName,
    idNumber,
    password,
    roleId,
  });

  let entity;
  if (validation) {
    entity = new Users(
      (id = null),
      firstName,
      lastName,
      idNumber,
      password,
      roleId,
    );
    try {
      const result = await entity.createUser();
      return result;
    } catch (error) {
      console.error(error);
    }
  }
};

const getUsersStored = async function (id) {
  if (id) {
    const entity = new Users(id);
    return entity.getOneUser();
  }

  const entity = new Users();
  return entity.getUsers();
};

const deleteUser = async function (id) {
  const entity = new Users(id);
  return entity.deleteUser();
};

const updateUser = async function (
  id,
  firstName,
  lastName,
  idNumber,
  password,
  roleId,
) {
  try {
    const entity = new Users(
      id,
      firstName,
      lastName,
      idNumber,
      password,
      roleId,
    );
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
