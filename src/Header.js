import React,{useState} from 'react'
import Main from './Main'
import DataTable from './DataTable'

function Header() {
  const [state, setstate] = useState('main')

  return(
    <div className='navbar'>
      <img className='logo' src='https://static.vecteezy.com/system/resources/previews/000/620/462/large_2x/sun-generic-logo-and-symbols-vector.jpg' alt='logo'/>
      <header>
        <a href='#' onClick={() => setstate('main')}>SF BANK</a>
        <a href='#' className='navbar-right' onClick={() => setstate('DataTable')}>Customers</a>
        <a href='#' className='navbar-right'>Transactions</a>
      </header>
      {state==='main'?<Main/>:<DataTable/>}
    </div>
  )
}

export default Header