const entity = require('./entity');
const Joi = require('joi');

const readTypes = async (id) => {
  if (id) {
    const validationSchema = Joi.object({
      id: Joi.string(),
    });

    const validation = validationSchema.validateAsync({ id });

    if (validation) {
      const Type = new entity(id);
      try {
        const result = await Type.getOne();
        return result;
      } catch (error) {
        console.error(error);
      }
    }
  }
  const Type = new entity(id);
  try {
    const result = await Type.getAll();
    return result;
  } catch (error) {
    console.error(error);
  }
};

const createNewType = async (name) => {
  const validationSchema = Joi.object({
    name: Joi.string(),
  });

  const validation = validationSchema.validateAsync({ name });

  if (validation) {
    const Type = new entity(null, name);
    try {
      await Type.createType();
      return {
        body: 'done!',
      };
    } catch (error) {
      console.error(error);
    }
  }
  return validationSchema.validate();
};

const updateType = async (id, data) => {
  const validationSchema = Joi.object({
    name: Joi.string(),
  })
  const validationSchema_id = Joi.object({
    id: Joi.string(),
  })
  const validation = validationSchema.validateAsync();
  const validation2 = validationSchema_id.validateAsync();
  if(validation && validation2) {
    try {
      const Type = new entity(id, data.name);
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
  const validation = validationSchema.validateAsync({ id });
  if (validation) {
    try {
      const Type = new entity(id);
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
