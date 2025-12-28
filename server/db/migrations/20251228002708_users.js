/**
 * @param {import('knex').Knex} knex
 */
export async function up(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id')
    table.string('username')
    table.string('email')
    table.string('password')
    table.string('role')
    table.timestamp('created_at')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('users')
}

