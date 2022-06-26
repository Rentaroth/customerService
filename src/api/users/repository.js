const db = require('../../db');
const TABLE = require('../../db/tables');

const get = async function (id) {
  if (id) {
    const result = await db.select('*').from(TABLE.users).where({ id });
    return result;
  }
  const result = await db.select('*').from(TABLE.users);
  return result;
};

const create = async function (payload) {
  const result = await db(TABLE.users).insert(payload);
  return result;
};

const update = async function (id, payload) {
  const result = await db(TABLE.users).where({ id }).update(payload);
  return result;
};

const erase = async function (id) {
  const result = await db(TABLE.users).where({ id }).del();
  return result;
};

module.exports = {
  get,
  create,
  update,
  erase,
};
