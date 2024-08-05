import fastify from 'fastify'
import { knex } from './database'
import { env } from './env'

const app = fastify()

app.get('/hello', async () => {
  const transation = await knex('transations').where('amount', 5).select('*')

  return transation
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('Server running on port 3000')
  })
