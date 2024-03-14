import TableRow from '../TableRow'

import './index.css'

const TableData = props => {
  const {formattedData} = props
  const {id, joke} = formattedData
  console.log(joke)

  const tableList = () => (
    <li className="list-style">
      <p className="id-style">id</p>
      <p className="joke-style">Joke</p>
    </li>
  )

  return (
    <ul className="unordered-list">
      {tableList()}
      {formattedData.map(eachDetails => (
        <TableRow eachDetails={eachDetails} key={eachDetails.id} />
      ))}
    </ul>
  )
}

export default TableData
