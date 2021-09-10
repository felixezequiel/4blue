
exports.up = function(knex) {
  return knex.schema.createTable('clients', function(table) {
    table.increments()
    table.string('name').notNullable()
    table.integer('age').notNullable()
    table.string('genre').notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('clients')
};
