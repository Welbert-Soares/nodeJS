import fastify from 'fastify'
import { randomUUID } from 'crypto'

import { knex } from './database'

const app = fastify()

app.get('/hello', async () => {
  const transation = await knex('transations').where('amount', 5).select('*')

  return transation
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Server running on port 3000')
  })
