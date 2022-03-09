const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
// const { dataBase: config } = require('./src/config');
const BASE_PATH = path.join(__dirname, 'src', 'db');
const { NODE_ENV, DBUSER, DBPASSWORD, DBHOST, DBNAME } = process.env;

const connectionData = {
  client: 'mysql',
  connection: {
    user: DBUSER,
    password: DBPASSWORD,
    host: DBHOST,
    database: DBNAME
  },
  migrations: {
    directory: path.join(BASE_PATH, 'migrations')
  },
  seeds: {
    directory: path.join(BASE_PATH, 'seeds')
  }
};

const testingData = {
  client: 'mysql2',
  connection: {
    filename: ':memory:'
  },
  useNullAsDefault: true,
  migrations: {
    directory: path.join(BASE_PATH, 'migrations')
  },
  seeds: {
    directory: path.join(BASE_PATH, 'seeds')
  }
};

// We return sqlite connection data if the environment is test (from testing)
module.exports = NODE_ENV === 'test' ? testingData : connectionData;