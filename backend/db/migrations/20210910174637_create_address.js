
exports.up = function(knex) {
  return knex.schema.createTable('address', function(table) {
    table.integer('id').primary().notNullable()
    table.string('street').notNullable()
    table.string('district').notNullable()
    table.string('city').notNullable()
    table.string('cep').notNullable()
    table.string('reference_point')

    table.foreign('id').references('id').inTable('clients')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('address')
};
