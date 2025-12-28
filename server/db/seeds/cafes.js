export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('cafes').del()

  // Inserts seed entries
  await knex('cafes').insert([
    { id: 1, name: "Parson's cafe and bakery", suburb: 'Khandallah', city: 'Wellington', website: '' },
    
  ])
}

