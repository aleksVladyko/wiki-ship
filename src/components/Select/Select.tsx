import './index.scss'

type SelectProps = {
  value: string
  name: string
  onChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined
  data: string[]
}

const Select = ({ value, onChange, name, data }: SelectProps) => {
  return (
    <select className="selected" value={value} onChange={onChange}>
      <option value="all">{name}</option>
      {data &&
        data.map((currentValue) => (
          <option key={currentValue} value={currentValue}>
            {currentValue}
          </option>
        ))}
    </select>
  )
}
export default Select
