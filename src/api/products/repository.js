const db = require('../../db');
const TABLES = require('../../db/tables');

const read = async (id) => {
  if (id) {
    const result = await db.select('*').from(TABLES.products).where({
      id,
    });
    return result;
  }
  const result = await db.select('*').from(TABLES.products);

  return result;
};

const create = async (payload) => {
  const result = await db(TABLES.products).insert(payload);

  return result;
};

const update = async (id, payload) => {
  const result = await db(TABLES.products).update(payload).where({
    id,
  });
  return result;
};

const erase = async (id) => {
  const result = await db(TABLES.products).del().where({ id });
  return result;
};

module.exports = {
  create,
  read,
  update,
  erase,
};
