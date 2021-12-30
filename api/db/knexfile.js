const { password, database, user } = require('../envConfig');

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database,
      user,
      password,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};
