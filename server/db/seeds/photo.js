export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('photo').del()

  // Inserts seed entries
  await knex('photo').insert([
    {
      id: 1,
      egg_bene_id: 1,
      user_id: 1,
      image_url: './parsons',
    },
  ])
}
