import { gql } from '@apollo/client'

export const GET_SHIPS = gql`
  query getShips($lang: String) {
    getShips(lang: $lang) {
      id
      description
      icons {
        large
        medium
      }
      level
      nation {
        name
        title
        color
        icons {
          large
          medium
        }
      }
      title
      type {
        name
        title
        icons {
          large
          medium
        }
      }
    }
  }
`
