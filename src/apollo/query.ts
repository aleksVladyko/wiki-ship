import { gql } from '@apollo/client'

export const GET_SHIPS = gql`
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
`
