/**
 * @param {import('knex').Knex} knex
 */
export async function up(knex) {
  return knex.schema.createTable('category_rating', (table) => {
    table.increments('id')
    table.integer('rating_id')
    table.integer('egg_score')
    table.integer('hollandaise_score')    
    table.integer('base_score')
    table.integer('side_score')
    table.integer('wait_time')
    table.integer('portion_size')
    table.integer('overall_cafe_score')
    
  })
}

export async function down(knex) {
  return knex.schema.dropTable('category_rating')
}
