import { ShipItem } from '../../types/types'
import './index.scss'

interface CardShipsProps {
  key?: number
  className?: string
  ship: ShipItem
}
const CardShip = ({ ship, className }: CardShipsProps) => {
  return (
    <div className={className}>
      <div
        className="card_container"
        style={{
          backgroundImage: `url(${ship.nation.icons.large})`,
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="card_ship">
          <div className="icon_ship">
            <img src={ship.icons.medium} alt="logo-ship" loading="lazy" />
          </div>
          <span className="title_ship">
            <h2>{ship.title}</h2>
          </span>
          <div className="data_ship">
            <div className="type_ship"> Тип корабля: {ship.type.title}</div>
            <div className="nation_ship">
              Нация: {ship.nation.title}
              <div className="level_ship">Уровень: {ship.level}</div>
            </div>
          </div>
          <div className="description_ship">
            <h3 className="description_ship_title">Описание:</h3>
            <p className="description_ship_text">{ship.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CardShip
