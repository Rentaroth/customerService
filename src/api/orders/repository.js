const db = require('../../db');
const TABLES = require('../../db/tables');

const create = async (payload) => {
  const result = await db(TABLES.order).insert(payload);
  return result;
};

const read = async (id) => {
  if (id) {
    const result = db(TABLES.order).select('*').where({ id });
    return result;
  }

  const result = db(TABLES.order);
  return result;
};

const update = async function (id, payload) {
  const result = await db(TABLES.order).where({ id }).update(payload);
  return result;
};

const erase = async function (id) {
  const result = await db(TABLES.order).where({ id }).del();
  return result;
};

module.exports = {
  create,
  read,
  update,
  erase,
};
