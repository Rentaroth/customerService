const db = require('../../db');
const TABLES = require('../../db/tables');

const create = async (payload) => {
  const result = await db(TABLES.types).insert(payload);
  return result;
};

const read = async (id) => {
  if (id) {
    const result = db(TABLES.types).select('*').where({ id });
    return result;
  }

  const result = db(TABLES.types);
  return result;
};

const update = async function (id, payload) {
  const result = await db(TABLES.types).where({ id }).update(payload);
  return result;
};

const erase = async function (id) {
  const result = await db(TABLES.types).where({ id }).del();
  return result;
};

module.exports = {
  create,
  read,
  update,
  erase,
};
