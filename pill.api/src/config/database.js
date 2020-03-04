const dotenv = require('dotenv');

const {
  parsed: {
    DB_USERNAME = 'root',
    DB_PASSWORD = 'root',
    DB_NAME = 'hm_pll',
    DB_HOST = '127.0.0.1',
    DB_DIALECT = 'mysql',
  } = {},
} = dotenv.config();

const DB = {
  DB_USERNAME,
  DB_PASSWORD,
  DB_NAME,
  DB_HOST,
  DB_DIALECT,
};

module.exports = {
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  host: DB_HOST,
  dialect: DB_DIALECT,
  DB,
};
