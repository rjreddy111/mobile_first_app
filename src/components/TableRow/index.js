import './index.css'

const TableRow = props => {
  const {eachDetails} = props
  const {id, joke} = eachDetails
  return (
    <li className="each-list">
      <p className="id-style-row">{id}</p>
      <p className="joke-style-wor">{joke}</p>
    </li>
  )
}

export default TableRow
