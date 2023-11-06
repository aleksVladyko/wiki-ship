import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  // uri: 'https://vortex.korabli.su/api/graphql/glossary/',
  // uri: 'http://localhost:4000/',
  uri: import.meta.env.VITE_SERVER_URL,
  cache: new InMemoryCache(),
  connectToDevTools: true,
})

