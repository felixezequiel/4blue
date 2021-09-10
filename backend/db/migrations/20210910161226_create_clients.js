
exports.up = function(knex) {
  return knex.schema.createTable('clients', function(table) {
    table.increments()
    table.string('name').notNullable()
    table.string('genre').notNullable()
    table.date('date_of_birth').notNullable()
  })
};

exports.down = function(knex) { 
  return knex.schema.dropTable('clients')
};
