const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  database: process.env.POSTGRES_DB_NAME,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.PORT,
  pgUser: process.env.POSTGRES_USER,
};
