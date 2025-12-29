export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('users').del()

  // Inserts seed entries
  await knex('users').insert([
    {
      id: 1,
      username: 'egg_lover',
      email: 'eggsrule@outlook.com',
      password: '********',
      role: 'user',
    },
  ])
}
