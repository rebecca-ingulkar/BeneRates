/**
 * @param {import('knex').Knex} knex
 */
export async function up(knex) {
  return knex.schema.createTable('rating', (table) => {
    table.increments('id')
    table.integer('user_id')
    table.integer('egg_bene_id')
    table.integer('overall_score')
    table.timestamp(true, true)
    })
}

export async function down(knex) {
  return knex.schema.dropTable('rating')
}
