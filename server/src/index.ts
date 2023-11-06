import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import express from 'express'
import http from 'http'
import { typeDefs, resolvers } from './ShemaShips.js'
import cors from 'cors'

const app = express()
const httpServer = http.createServer(app)
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
})

await server.start()

app.use(
  '/',
  cors<cors.CorsRequest>({
    origin: ['http://localhost:5173', 'https://studio.apollographql.com','https://aleksvladyko.github.io', 'https://aleksvladyko.github.io/wiki-ship'],
  }),
  express.json(),
  expressMiddleware(server),
)
const url = process.env.VITE_SERVER_URL
await new Promise<void>((resolve) => httpServer.listen({ port: url || 4001 }, resolve))
console.log(`🚀 Server ready at ${url}`)
