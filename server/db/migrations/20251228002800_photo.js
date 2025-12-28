/**
 * @param {import('knex').Knex} knex
 */
export async function up(knex) {
  return knex.schema.createTable('photo', (table) => {
    table.increments('id')
    table.integer('egg_bene_id')
    table.integer('user_id')
    table.string('image_url')
    table.timestamp('created_at')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('photo')
}
