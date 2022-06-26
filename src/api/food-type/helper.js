const Joi = require('joi');
const { customAlphabet } = require('nanoid');
const nanoid = customAlphabet('1234567890', 10);

const entity = require('./entity');

const readTypes = async (id) => {
  const validationSchema = Joi.object({
    id: Joi.string().optional(),
  });
  const validation = await validationSchema.validateAsync({ id });
  const Type = new entity(validation);
  try {
    const result = await Type.getOne();
    return result;
  } catch (error) {
    console.error(error);
  }
};

const createNewType = async (data) => {
  const validationSchema = Joi.object({
    name: Joi.string(),
  });

  const validation = await validationSchema.validateAsync(data);
  console.log(validation);
  if (validation) {
    const id = await nanoid(10);
    const created_at = new Date();
    const updated_at = new Date();
    const info = {
      id,
      ...validation,
      created_at,
      updated_at,
    };
    const Type = new entity(info);
    try {
      await Type.createType();
      return {
        body: 'done!',
      };
    } catch (error) {
      console.error(error);
    }
  }
  return validation;
};

const updateType = async (id, data) => {
  const validationSchema = Joi.object({
    id: Joi.string(),
    name: Joi.string(),
  });
  const info = {
    id,
    ...data,
  };
  const validation = await validationSchema.validateAsync(info);
  if (validation) {
    try {
      const updated_at = new Date();
      const params = {
        id,
        ...data,
        updated_at,
      };
      const Type = new entity(params);
      await Type.updateType();
      return {
        message: `Updated Type with id: ${id}`,
      };
    } catch (error) {
      console.error(error);
    }
  }
  return Joi.ValidationError('Invalid data!');
};

const deleteType = async (id) => {
  const validationSchema = Joi.object({
    id: Joi.string(),
  });
  const validation = await validationSchema.validateAsync({ id });
  if (validation) {
    try {
      const params = { id };
      const Type = new entity(params);
      await Type.deleteType();
      return {
        message: `Deleted Type with id: ${id}`,
      };
    } catch (error) {
      console.error(error);
    }
  }
};

module.exports = {
  readTypes,
  createNewType,
  deleteType,
  updateType,
};
