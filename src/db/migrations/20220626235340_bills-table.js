/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('Bills', (table) => {
    table.string('id').primary().notNullable();
    table.integer('total').notNullable();
    table.string('book_id');
    table.string('cashier_id');
    table.string('cashier_admin_id');
    table.timestamps();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('Bills');
};

