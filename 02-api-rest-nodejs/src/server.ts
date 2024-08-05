import fastify from "fastify";

const app =fastify()

app.get('/hello', () => {
  return "hello world"
})

app.listen({
  port: 3333,
}).then(() => {
  console.log('Server running on port 3000')
})