
exports.up = function(knex) {
  return knex.schema.createTable('address', function(table) {
    table.integer('fk_id').primary().notNullable()
    table.string('street').notNullable()
    table.string('district').notNullable()
    table.string('city').notNullable()
    table.string('cep').notNullable()
    table.string('reference_point')

    table.foreign('fk_id').references('id').inTable('clients')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('address')
};
