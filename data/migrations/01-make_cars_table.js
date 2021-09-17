exports.up = function (knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments("car_id")
    tbl.text('vin').unique().notNullable()
    tbl.text('make').notNullable()
    tbl.integer('mileage').notNullable
    tbl.text("title")
    tbl.text('transmisson')
  })
};

exports.down = function (knex) {
  return knex.schema.dropIfTableExists("cars")
};
