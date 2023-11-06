export type ShipItem = {
  id: number
  title: string
  description: string
  icons: ShipIcons
  level: string
  type: ShipType
  nation: ShipNation
}

type ShipIcons = {
  large: string
  medium: string
}

type ShipType = {
  name: string
  title: string
  icons: ShipIcons
}
type ShipNation = {
  name: string
  title: string
  color: string
  icons: ShipIcons
}



// export type ShipItem = {
//   id: number
//   title: string
//   description: string
//   icons: {
//     medium: string
//   }
//   level: number
//   type: {
//     title: string
//     icons: {
//       default: string
//     }
//   }
//   nation: {
//     title: string
//     color: string
//     icons: {
//       small: string
//       large: string
//     }
//   }
// }

