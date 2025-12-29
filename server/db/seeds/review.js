export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('review').del()

  // Inserts seed entries
  await knex('review').insert([
    {
      id: 1,
      rating_id: 1,
      comment:
        'alright meal, the extra almond croissant was worth the extra pennies spent.',
      would_order_again: false,
    },
  ])
}
