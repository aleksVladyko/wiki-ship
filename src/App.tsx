import { useQuery } from '@apollo/client'
import { GET_SHIPS } from './apollo/query'
import { ShipItem } from './types/types'
import { useState } from 'react'
import './App.scss'
import CardShip from './components/CardShip/CardShip'
import { shuffleArray } from './helpers/helpers'
import Select from './components/Select/Select'

type DataShips = {
  vehicles: Array<ShipItem>
}

// const PAGE_SIZE = 10
function App() {
  // const [page, setPage] = useState(0)
  const [selectedNation, setSelectedNation] = useState('all')
  const [selectedType, setSelectedType] = useState('all')
  const [selectedLevel, setSelectedLevel] = useState('all')
  const { loading, error, data } = useQuery<DataShips>(GET_SHIPS, {
    variables: {
      lang: 'ru',
    },
  })

  if (loading) {
    return <h2>...Loading</h2>
  }
  if (error) {
    return <h2>...Error</h2>
  }
  // const limit = 30
  // const ships = data?.vehicles.slice(0, limit)

  // added a function for shuffling data in random order in the original array
  const arrayShipsRandom = shuffleArray(data?.vehicles || [])

  // Формирование уникальных значений наций, типов и уровней кораблей
  const nationsSet = new Set(data?.vehicles.map((ship) => ship.nation.title))
  const typesSet = new Set(data?.vehicles.map((ship) => ship.type.title))
  const levelsSet = new Set(data?.vehicles.map((ship) => ship.level.toString()))

  // Преобразование Set обратно в массив для использования в селектах
  const uniqueNations = Array.from(nationsSet)
  const uniqueTypes = Array.from(typesSet)
  const uniqueLevels = Array.from(levelsSet).sort((a: any, b: any) => a - b)

  const filteredShips = arrayShipsRandom?.filter((ship) => {
    const isNationMatch =
      selectedNation === 'all' || selectedNation === ship.nation.title
    const isTypeMatch =
      selectedType === 'all' || selectedType === ship.type.title
    const isLevelMatch =
      selectedLevel === 'all' || selectedLevel === ship.level.toString()
    return isNationMatch && isTypeMatch && isLevelMatch
  })
  return (
    <div className="container">
      <h1>Ships Gallery</h1>
      <div className="container_selects">
        <Select
          name="All Nations"
          value={selectedNation}
          onChange={(e) => setSelectedNation(e.target.value)}
          data={uniqueNations}
        />
        <Select
          name="All Types"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          data={uniqueTypes}
        />
        <Select
          name="All Levels"
          value={selectedLevel}
          onChange={(e) => setSelectedLevel(e.target.value)}
          data={uniqueLevels}
        />
      </div>
      <div className="gallery">
        <div className="gallery_container">
          {filteredShips &&
            filteredShips.map((ship) => (
              <CardShip
                key={ship.id}
                ship={ship}
                className="gallery_container_item"
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default App
