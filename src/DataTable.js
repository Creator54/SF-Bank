import React,{ useMemo, useState } from 'react'
import { useTable } from 'react-table'
import Popup from './Popup'
import { customerData } from './CustomerData'
import { COLUMNS } from './Columns'

let userData
let names = []
let Item

function DataTable(){
  const [table, setTable] = useState('true')
  const [amount, setAmount] = useState('')
  const columns = useMemo(() => COLUMNS,[])
  const data = useMemo(() => customerData,[])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data
    },
  )

  function handleAmountInput(e)  {
    e.preventDefault()
    setAmount(e.target.value)
    if(e.target.value > userData.balance || e.target.value < 0) {
      alert('Invalid Amount')
      setAmount('')
    }
    // console.log(e.target.value)
  }

  function makeOption(){
    return <select>{names.map(Item)}</select>
  }

  return (table)? (
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
            if(names.length !==10) {
              names.push(row.original.name) //get names data as an array
              Item = (name,id) => <option key={id}>{name}</option>
            }
            // console.log(names)       
            return(
              <tr {...row.getRowProps()}>
                {
                  row.cells.map((cell,i) => {
                    return <td {...row.getRowProps({onClick: () =>{setTable(false);userData = row.original }})}>
                      {cell.render("Cell")}
                    </td>
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
    <Popup showPopup={!table} setShowPopup={setTable}>
      {/* {console.log(user)} */}
      <h2>Name: {userData.name}</h2>
      <h2>Balance: {userData.balance}</h2>
      <br/>
      <>
        <h2>Transfer</h2>
        <h2>User: {makeOption()}</h2>
        <h2>Amount: <input type='number' value={amount} onChange={handleAmountInput}></input></h2>
        <div className='send-btn-container'><button className='send-btn' onClick={setTable}>Send</button></div>
      </>
    </Popup>
  )
}

export default DataTable