import * as Knex from 'knex'

export async function seed(knex: Knex): Promise<any> {
  return knex('transaction')
    .del()
    .then(() => {
      return knex('transaction').insert([
        {
          lease_id: 2,
          amount: '-1300',
          date: '2019-06-25',
          type: 'payment',
          notes: 'two rent payments (pay ahead), for July and Aug 2019',
        },
        {
          lease_id: 2,
          amount: '650',
          date: '2019-07-01',
          type: 'rent',
          notes: 'RENT charge July 2019',
        },
      ])
    })
}
