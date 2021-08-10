import React from 'react'
import customerData from './CustomerData'

function Customers(){
  const data = customerData.map(data =><div key={data.id} name={data.name} balance = {data.balance}/>)
  return {data}
}

export default Customers