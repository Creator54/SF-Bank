import React,{ useMemo, useState } from 'react'
import { useTable } from 'react-table'
import Popup from './Popup'
import DATA from './CustomerData'
import { COLUMNS } from './Columns'


let userData
let names = []

function DataTable(){
  const [table, setTable] = useState('true')
  const [userName, setUserName] = useState('')
  const [amount, setAmount] = useState('')
  const columns = useMemo(() => COLUMNS,[])
  const data = useMemo(() => DATA,[])

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

  // function handleUserNameInput(e) {
  //   e.preventDefault()
  //   setUserName(e.target.value)
  //   if(e.target.value > userData.balance || e.target.value < 0) {
  //     alert('Invalid User')
  //     setAmount('')
  //   }
  //   // console.log(e.target.value)
  // }

  function handleAmountInput(e)  {
    e.preventDefault()
    setAmount(e.target.value)
    if(e.target.value > userData.balance || e.target.value < 0) {
      alert('Insufficient Balance')
      setAmount('')
    }
    // console.log(e.target.value)
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
            names.push(row.original.name) //get names data as an array
            // console.log(names)       
            return(
              <tr {...row.getRowProps()}>
                {
                  row.cells.map((cell,i) => {
                    return <td {...row.getRowProps({onClick: () =>{ setTable(false);userData = row.original }})}>
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
        <h2>User: <select><option value={names}>{names}</option></select></h2>
        {console.log(names)}
        <h2>Amount: <input type='number' value={amount} onChange={handleAmountInput}></input></h2>
        <div className='send-btn-container'><button className='send-btn'>Send</button></div>
      </>
    </Popup>
  )
}

export default DataTable