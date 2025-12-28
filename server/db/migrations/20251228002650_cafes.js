/**
 * @param {import('knex').Knex} knex
 */
export async function up(knex) {
  return knex.schema.createTable('cafes', (table) => {
    table.increments('id')
    table.string('name')
    table.string('suburb')
    table.string('city')
    table.string('website')
    table.timestamp(true, true)
  })
}

export async function down(knex) {
  return knex.schema.dropTable('cafes')
}
