/**
 * @param {import('knex').Knex} knex
 */
export async function up(knex) {
  return knex.schema.createTable('cafes', (table) => {
    table.increments('id')
    table.string('name')
    table.string('suburb')
    table.string('city')
    table.string('latitude')
    table.string('longitude')
    table.string('website')
    table.timestamp('created_at')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('cafes')
}
