import React from 'react'

function Header(){
  return(
    <div className='navbar'>
      <img class='logo' src='https://static.vecteezy.com/system/resources/previews/000/620/462/large_2x/sun-generic-logo-and-symbols-vector.jpg' alt='logo'/>
      <header>
        <a href=''>SF BANK</a>
        <a id='navbar-right'>Customers</a>
      </header>
    </div>
  )
}

export default Header