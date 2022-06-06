/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('Users', (table) => {
    table.string('id');
    table.string('first_name');
    table.string('last_name');
    table.integer('id_number');
    table.string('password');
    table.string('role_id');
    table.dateTime('created_at');
    table.dateTime('updated_at');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('Users');
};
