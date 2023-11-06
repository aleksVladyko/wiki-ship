import axios from 'axios'

export const typeDefs = `#graphql
  type Ship {
    id: String
    title: String
    description: String
    icons: ShipIcons
    level: Int
    type: ShipType
    nation: ShipNation
  }

  type ShipIcons {
    large: String
    medium: String
  }

  type ShipType {
    name: String
    title: String
    icons: ShipIcons
  }

  type ShipNation {
    name: String
    title: String
    color: String
    icons: ShipIcons
  }

  type Query {
    getShips(lang: String): [Ship]
  }
`;

// Резолверы
export const resolvers = {
  Query: {
    getShips: async (_, { lang }) => {
      try {
        const response = await axios.post(
          'https://vortex.korabli.su/api/graphql/glossary/',
          {
            query: `
              query getShips($lang: String) {
                vehicles(lang: $lang) {
                  id
                  title
                  description
                  icons {
                    large
                    medium
                  }
                  level
                  type {
                    name
                    title
                    icons {
                      default
                    }
                  }
                  nation {
                    name
                    title
                    color
                    icons {
                      small
                      medium
                      large
                    }
                  }
                }
              }
            `,
            variables: {
              lang,
            },
          },
        )
        const ships = response.data.data.vehicles
        return ships
      } catch (error) {
        console.error(error.message)
        throw new Error('Failed to fetch ships data')
      }
    },
  },
}
