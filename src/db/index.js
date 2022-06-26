const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
const config = require('../../knexfile');

let knex;

if (!knex) {
  knex = require('knex')(config);

  if (config.client === 'mysql') {
    knex.executeProcedure = async () => {};
    knex.executeFunction = async () => {};
    knex.executeNonQuery = async () => {};
    knex.executeQuery = async () => {};
    knex.executeNonQueryTrx = async () => {};
  } else if (config.client === 'sqlite3') {
    knex.executeProcedure = async () => {};
    knex.executeFunction = async () => {};
    knex.executeNonQuery = async () => {};
    knex.executeQuery = async () => {};
    knex.executeNonQueryTrx = async () => {};
  }
}

module.exports = knex;
