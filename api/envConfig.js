const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  dbName: process.env.POSTGRES_PASSWORD,
  password: process.env.POSTGRES_DB_NAME,
};
