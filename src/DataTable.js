import React,{ useMemo, useState } from 'react'
import {useTable} from 'react-table'
import Popup from './Popup'
import DATA from './CustomerData'
import {COLUMNS} from './Columns'

let userData

function DataTable(){
  const [table, settable] = useState('true')
  const columns = useMemo(() => COLUMNS,[])
  const data = useMemo(() => DATA,[])

  const tableInstance = useTable({
    columns,
    data
  })

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance

  return (table ==='true')? (
    <table {...getTableProps()}>
      <thead>
        {
          headerGroups.map(headerGroup =>(
            <tr {...headerGroup.getHeaderGroupProps()}>
              {
                headerGroup.headers.map(column =>(
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))
              }
            </tr>
          ))
        }
      </thead>
      <tbody {...getTableBodyProps()}>
        {
          rows.slice(0,10).map((row ,i)=> {
            prepareRow(row)            
            return(
              <tr {...row.getRowProps()}>
                {
                  row.cells.map((cell,i) => {
                    return <td {...row.getRowProps({onClick: () =>{ settable('false');userData = row.original }})}>{cell.render("Cell")}</td>
                  })
                }
              </tr>
            )
          })
        }
      </tbody>
    </table>
  ):
  (
    <Popup trigger={true}>
      {/* {console.log(user)} */}
      <h2>Name: {userData.name}</h2>
      <h2>Balance: {userData.balance}</h2>
      <br/>
      <>
        <h2>Transfer</h2>
        <h2>User: <input></input></h2>
        <h2>Amount: <input></input></h2>
        <div className='send-btn-container'><button className='send-btn'>Send</button></div>
      </>
    </Popup>
  )
}

export default DataTable