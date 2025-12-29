export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('category_rating').del()

  // Inserts seed entries
  await knex('category_rating').insert([
    {
      id: 1,
      rating_id: 1,
      egg_score: 2,
      hollandaise_score: 4,
      base_score: 3,
      side_score: 4,
      wait_time: 3,
      portion_size: 4,
      overall_cafe_score: 3,
    },
  ])
}
