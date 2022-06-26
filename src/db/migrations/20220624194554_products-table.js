/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('Products', (table) => {
    table.string('id').primary();
    table.string('name');
    table.text('description').nullable();
    table.integer('price');
    table.string('type');
    table.timestamps();
    table.timestamp('deleted_at').nullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('Products');
};
