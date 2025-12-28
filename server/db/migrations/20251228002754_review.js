/**
 * @param {import('knex').Knex} knex
 */
export async function up(knex) {
  return knex.schema.createTable('review', (table) => {
    table.increments('id')
    table.integer('rating_id')
    table.string('comment')
    table.boolean('would_order_again')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('review')
}
