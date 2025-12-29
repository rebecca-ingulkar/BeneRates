export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('egg_bene').del()

  // Inserts seed entries
  await knex('egg_bene').insert([
    {
      id: 1,
      cafe_id: 1,
      bene_name: 'Eggs Benedict',
      base_item: 'Hash Brown',
      side_option: 'Bacon',
      price: '23.99',
      menu_description: 'Poached eggs on hash brown with Bacon',
    },
  ])
}
