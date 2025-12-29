export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('rating').del()

  // Inserts seed entries
  await knex('rating').insert([
    { id: 1, user_id: 1, egg_bene_id: 1, overall_score: 5 },
  ])
}
