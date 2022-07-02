/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('Books', (table) => {
    table.string('id', 10).primary().notNullable();
    table.string('table_id', 10);
    table.timestamp('from');
    table.timestamp('to');
    table.timestamps();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    knex.schema.dropTable('Books');
};

