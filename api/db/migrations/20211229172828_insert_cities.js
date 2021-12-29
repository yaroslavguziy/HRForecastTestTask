const csv = require('csvtojson');
const CITIES_TABLE = 'cities';

exports.up = async function (knex) {
  const cities = await csv().fromFile('../db/datasets/cities.csv');
  return knex(CITIES_TABLE).insert(cities);
};

exports.down = function (knex) {
  return knex(CITIES_TABLE).delete();
};
