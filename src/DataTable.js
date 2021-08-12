import React,{ useMemo } from 'react'
import {useTable} from 'react-table'
import DATA from './CustomerData'
import {COLUMNS} from './Columns'

function handleTableCellClick(e,row){
  console.log(row.original.name)
}

function DataTable(){
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

  return (
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
                    return <td {...row.getRowProps({onClick: (e)=>handleTableCellClick(e,row)})}>{cell.render("Cell")}</td>
                  })
                }
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default DataTable