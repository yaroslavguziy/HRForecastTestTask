const CITIES_TABLE = 'cities';

exports.up = function (knex) {
  return knex.schema.createTable(CITIES_TABLE, table => {
    table.integer('id').notNullable().primary();
    table.string('name').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(CITIES_TABLE);
};
