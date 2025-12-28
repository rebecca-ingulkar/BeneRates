/**
 * @param {import('knex').Knex} knex
 */
export async function up(knex) {
  return knex.schema.createTable('egg_bene', (table) => {
    table.increments('id')
    table.integer('cafe_id')
    table.string('bene_name')
    table.string('base_item')
    table.string('side_option')
    table.string('price')
    table.string('menu_description')
    
  })
}

export async function down(knex) {
  return knex.schema.dropTable('egg_bene')
}
